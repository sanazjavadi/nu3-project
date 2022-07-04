import React from "react";

// InterFaces
import { IInput } from "./Input";

const Input: React.FC<IInput.IProps> = ({
  type = "text",
  placeholder,
  error,
  className,
  value,
  onChange,
  ...other
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        id="search"
        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  className: "",
};

export default Input;
