import { FC } from "react";
import SearchInputProps from "./search-input.types";
import style from "./search-input.module.css";
const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <div
      className={`flex justify-center gap-3 bg-secondary border-gray-200 rounded-md align-center p-2 px-5 ${style.searchInput}`}
    >
      <input
        type="text"
        className={"outline-none bg-transparent  w-4/5"}
        {...props}
      />
      <button className="outline-none border-none" onClick={props.onSearch}>
        <img src="/static/icons/search-lens.svg" alt="" />
      </button>
    </div>
  );
};

export default SearchInput;
