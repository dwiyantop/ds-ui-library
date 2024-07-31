import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import type { SelectDropdownProps, DropdownOptionItem } from './types';
import { IconChevronDown, IconCancel, IconSearch } from '../Icon';
import style from './style.module.css';

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  placeholder = '',
  multiple = false,
  searchable = false,
  options = [],
  customOptionRender,
  portalContainerId = '',
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string | string[]>(multiple ? [] : '');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const dropdownContentRef = React.useRef<HTMLDivElement>(null);

  const onClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      dropdownContentRef.current &&
      !dropdownContentRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const showPlaceholder = (): boolean => {
    return value.length === 0;
  };

  const isThisItemSelected = (itemValue: string): boolean => {
    return Array.isArray(value) ? value.includes(itemValue) : value === itemValue;
  };

  const filterOptions = (): DropdownOptionItem[] => {
    if (searchQuery.trim()) {
      return options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return options;
  };

  const isFilterOptionsEmpty = (): boolean => {
    return filterOptions().length > 0;
  };

  const portalLocation = portalContainerId
    ? portalContainerId === 'body'
      ? document.body
      : document.getElementById(portalContainerId)
    : '';

  const onItemSelect = (item: DropdownOptionItem) => {
    if (multiple) {
      setValue((prev) => {
        const currentValue = Array.isArray(prev) ? prev : [];
        return currentValue.includes(item.value)
          ? currentValue.filter((value) => value !== item.value)
          : [...currentValue, item.value];
      });
    } else {
      setValue(item.value);
      setOpen(false);
    }
  };

  const onRemoveItem = (event: React.MouseEvent, itemValue: string) => {
    event.stopPropagation();
    setValue((prev) => {
      if (Array.isArray(prev)) {
        return prev.filter((value) => value !== itemValue);
      }
      return prev;
    });
  };

  const SelectedLabels: React.FC<{ value: string | string[] }> = ({ value }) => {
    if (Array.isArray(value) && value.length > 0) {
      return (
        <div className="relative overflow-x-auto">
          <div className="flex flex-nowrap gap-1">
            {options
              .filter((option) => (Array.isArray(value) ? value.includes(option.value) : value === option.value))
              .map((option) => (
                <div key={option.value} className="flex-none">
                  <div className={style.sdDelectedItemLabel}>
                    <span>{option.label}</span>
                    <span onClick={(e) => onRemoveItem(e, option.value)}>
                      <IconCancel width="w-3" height="h-3" color="text-white" />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    }
    return <span>{value}</span>;
  };

  const highlightText: string | React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="bg-purple-200 font-semibold">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  const DefaultOptions: React.FC = () => {
    return (
      <div className={clsx(style.sdDropdownList, 'max-h-[180px]')}>
        <ul>
          {filterOptions().map((option) => (
            <li
              key={option.value}
              className={clsx(style.sdDropdownItem, isThisItemSelected(option.value) && style.sdDropdownItemSelected)}
              onClick={() => onItemSelect(option)}
            >
              {highlightText({ text: option.label, highlight: searchQuery })}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const CustomOptions: React.FC = () => {
    if (customOptionRender) {
      return (
        <div>
          {filterOptions().map((option) => (
            <div key={option.value} onClick={() => onItemSelect(option)}>
              {customOptionRender({ item: option, selected: isThisItemSelected(option.value) })}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const DropdownContent = (
    <div className={clsx(style.sdDropdown, open && style.sdDropdownOpen)} ref={dropdownContentRef}>
      {searchable && (
        <div className={style.sdSearch}>
          <span className={style.sdSearchLeadingIcon}>
            <IconSearch color="text-gray-400" width="w-5" height="h-5" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className={style.sdSearchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.trim().length > 0 && (
            <span className={style.sdSearchTrailingIcon} onClick={() => setSearchQuery('')}>
              <IconCancel color="text-gray-400" width="w-3.5" height="h-3.5" />
            </span>
          )}
        </div>
      )}
      {isFilterOptionsEmpty() ? (
        customOptionRender ? (
          <CustomOptions />
        ) : (
          <DefaultOptions />
        )
      ) : (
        <p className="text-sm text-gray-400">Result not found</p>
      )}
    </div>
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  return (
    <>
      <div className={style.sdContainer} ref={dropdownRef}>
        <div className={clsx(style.sdSelectControl, open && style.sdSelectControlFocus)} onClick={() => setOpen(!open)}>
          {showPlaceholder() ? <span className="text-gray-400">{placeholder}</span> : <SelectedLabels value={value} />}
          <IconChevronDown />
        </div>
        {open && (portalLocation ? ReactDOM.createPortal(DropdownContent, portalLocation) : DropdownContent)}
      </div>
    </>
  );
};

export default SelectDropdown;
