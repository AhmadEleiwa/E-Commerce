"use client";
import { FC, useState } from "react";
import HeaderProps from "./header.types";
import SearchInput from "../search-input";
import style from "./header.module.css";
import DropDown from "../dropdown";
const Header: FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center border-b-slate-100 border-b">
      <div className="flex w-full h-12 items-center bg-black text-white">
        <div className="flex w-4/5 items-center justify-center">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="" className="font-bold underline">
            ShopNow
          </a>
        </div>
        <DropDown options={[{name:'English', value:'en'},{name:'Arabic',value:'ar'}]} value={selectValue} onSelect={setSelectValue} />
      </div>
      <header
        className={`flex justify-between items-center w-4/5 ${style.header}`}
      >
        <h1 className="font-bold text-2xl">Execlusive</h1>
        <nav>
          <ul className="flex gap-16 text-lg">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-10 items-center">
        <SearchInput
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          placeholder="what are you looking for?"
          onSearch={() => {
            alert(searchValue);
          }}
        />
       
            <button><img src="static/icons/heart.svg" alt="" /></button>
            <button><img src="static/icons/cart.svg" alt="" /></button>
        </div>
      </header>
    </div>
  );
};

export default Header;
