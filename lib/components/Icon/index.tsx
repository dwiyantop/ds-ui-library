import React from 'react';

type IconProps = {
  width?: string;
  height?: string;
  color?: string;
};

const IconChevronDown: React.FC<IconProps> = ({ width = 'w-4', height = 'h-4', color = 'text-gray-500' }) => {
  return (
    <svg className={`${width} ${height} ${color}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const IconCancel: React.FC<IconProps> = ({ width = 'w-4', height = 'h-4', color = 'text-gray-500' }) => {
  return (
    <svg
      className={`${width} ${height} ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    </svg>
  );
};

const IconSearch: React.FC<IconProps> = ({ width = 'w-4', height = 'h-4', color = 'text-gray-500' }) => {
  return (
    <svg className={`${width} ${height} ${color}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { IconChevronDown, IconCancel, IconSearch };
