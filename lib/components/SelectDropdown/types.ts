/* eslint-disable no-unused-vars */
export type SelectDropdownProps = {
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
  options?: DropdownOptionItem[];
  customOptionRender?: ({ item, selected }: CustomOptionRenderParams) => React.ReactNode;
  portalContainerId?: string;
};

export type CustomOptionRenderParams = {
  item: DropdownOptionItem;
  selected: boolean;
};

export type DropdownOptionItem = {
  label: string;
  value: string;
};
