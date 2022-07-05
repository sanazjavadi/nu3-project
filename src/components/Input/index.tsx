import React from "react";
import { MdOutlineClear } from "react-icons/md";

// InterFaces
import { IInput } from "./Input";

const Input: React.FC<IInput.IProps> = ({
  type = "text",
  placeholder,
  error,
  className,
  value,
  onChange,
  removeSearch,
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
        className=" appearance-none block pl-3 pr-10 py-2  w-full z-20 text-base text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      />
      <MdOutlineClear
        className="absolute top-3 right-3 right-0 cursor-pointer"
        onClick={removeSearch}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  className: "",
};

export default Input;
