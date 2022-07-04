import React from "react";

// InterFaces
import { ISelect } from "./Select";

const Select: React.FC<ISelect.IProps> = ({ onChange, options, label }) => {
  return (
    <div className="flex ml-6 items-center">
      <span className="mr-3">{label}</span>
      <div className="relative">
        <select
          className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
        >
          {options.map((option) => (
            <option value={option.id || option.value}>
              {option.title || option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
