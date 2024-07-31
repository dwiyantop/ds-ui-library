import clsx from 'clsx';
import { default as SelectDropdown } from '../lib/components/SelectDropdown';
import type { DropdownOptionItem, CustomOptionRenderParams } from '../lib/components/SelectDropdown/types';

function App() {
  const options: DropdownOptionItem[] = [
    { label: 'Very Long Option Label One', value: 'option1' },
    { label: 'A Lengthy Description for Option Two', value: 'option2' },
    { label: 'Extended Label Name for Option Three', value: 'option3' },
    { label: 'A Prolonged Option Label Example Number Four', value: 'option4' },
    { label: 'Detailed Label for the Fifth Option Item', value: 'option5' },
    { label: 'An Exceedingly Long Option Label for Item Six', value: 'option6' },
    { label: 'Option Label Seven with Quite an Extensive Description', value: 'option7' },
    { label: 'This is a Very Extended Option Label for Item Eight', value: 'option8' },
    { label: 'Option Number Nine with a Long Descriptive Title', value: 'option9' },
    { label: 'A Lengthy and Descriptive Label for Option Ten', value: 'option10' },
    { label: 'Extensive Label Name for the Eleventh Option Item', value: 'option11' },
    { label: 'Option Twelve Featuring a Detailed Description', value: 'option12' },
    { label: 'This Option Label is Quite Lengthy and Descriptive for Thirteen', value: 'option13' },
    { label: 'Extended Option Label for Number Fourteen', value: 'option14' },
    { label: 'Option Fifteen with a Remarkably Long Label', value: 'option15' },
    { label: 'A Very Detailed Description for the Sixteenth Option Item', value: 'option16' },
    { label: 'Seventeenth Option with an Extremely Extended Label', value: 'option17' },
    { label: 'Eighteenth Option Featuring a Lengthy Label', value: 'option18' },
    { label: 'Nineteenth Option Item with an Elaborate Label', value: 'option19' },
    { label: 'Option Number Twenty with a Protracted Descriptive Label', value: 'option20' },
  ];

  const renderCustomOption = (option: CustomOptionRenderParams) => (
    <div
      className={clsx(
        'px-2 py-1.5 text-sm text-purple-400 hover:text-purple-600 cursor-pointer',
        option.selected ? 'font-semibold ' : 'font-light ',
      )}
    >
      <strong>{option.item.label}</strong>
    </div>
  );

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Select Dropdown</h1>
      <div>
        <h3 className="mb-1 text-lg text-gray-500 font-semibold">Default</h3>
        <SelectDropdown options={options} placeholder="Please select data" />
      </div>
      <div>
        <h3 className="mb-1 text-lg text-gray-500 font-semibold">Searchable</h3>
        <SelectDropdown options={options} searchable placeholder="Please select data" />
      </div>
      <div>
        <h3 className="mb-1 text-lg text-gray-500 font-semibold">Multiple</h3>
        <SelectDropdown options={options} searchable multiple placeholder="Please select data" />
      </div>

      <div>
        <h3 className="mb-1 text-lg text-gray-500 font-semibold">Portal</h3>
        <SelectDropdown
          options={options}
          multiple
          searchable
          placeholder="Please select data"
          portalContainerId="root"
        />
      </div>

      <div>
        <h3 className="mb-1 text-lg text-gray-500 font-semibold">Custom Render</h3>
        <SelectDropdown
          options={options}
          multiple
          searchable
          placeholder="Please select data"
          customOptionRender={renderCustomOption}
        />
      </div>
    </div>
  );
}

export default App;
