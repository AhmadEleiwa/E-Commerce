import { FC } from "react";
import SearchInputProps from "./search-input.types";

const SearchInput: FC<SearchInputProps> = ({ className, ...props }) => {
  return (
    <div
      className={`flex justify-center gap-3 bg-inputBG h-12 border-gray-200 rounded-md align-center p-2 px-5  ${className}`}
    >
      <input
        type="text"
        className={"outline-none bg-transparent "}
        {...props}
      />
      <button className="outline-none border-none" onClick={props.onSearch}>
        <img src="/static/icons/search-lens.svg" alt="" />
      </button>
    </div>
  );
};

export default SearchInput;
