import clsx from 'clsx';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectDropdown } from '../../../../lib/main';
import type { DropdownOptionItem, CustomOptionRenderParams } from '../../../../lib/components/SelectDropdown/types';

const meta = {
  title: 'Select Dropdown',
  component: SelectDropdown,
  tags: ['autodocs'],
  argTypes: {
    searchable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof SelectDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    searchable: false,
    multiple: false,
    placeholder: 'Please select',
    options: options,
  },
};

export const Searchable: Story = {
  args: {
    searchable: true,
    multiple: false,
    placeholder: 'Please select',
    options: options,
  },
};

export const Multiple: Story = {
  args: {
    searchable: true,
    multiple: true,
    placeholder: 'Please select',
    options: options,
  },
};

export const Portal: Story = {
  args: {
    searchable: true,
    multiple: true,
    placeholder: 'Please select',
    options: options,
    portalContainerId: 'storybook-root',
  },
};

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

export const CustomRender: Story = {
  args: {
    searchable: true,
    multiple: true,
    placeholder: 'Please select',
    options: options,
    customOptionRender: renderCustomOption,
  },
};
