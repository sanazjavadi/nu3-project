import React from "react";

// InterFaces
import { ISelect } from "./Select";

const Select: React.FC<ISelect.IProps> = ({
  onChange,
  options,
  label,
  disabled = false,
}) => {
  return (
    <div className="flex items-center">
      <span className="mr-1">{label}</span>
      <div className="relative">
        <select
          aria-label="select"
          disabled={disabled}
          className="appearance-none text-base text-gray-900 bg-gray-100 rounded-lg mr-3
          border border-gray-300 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
        >
          {options?.map((option) => (
            <option
              key={option.id || option.value || option}
              value={option.id || option.value}
            >
              {option.title || option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
