"use client";
import { FC, useRef, useState } from "react";
import HeaderProps from "./header.types";
import SearchInput from "../search-input";
import style from "./header.module.css";
import DropDown from "../dropdown";
const Header: FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("en");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col gap-11 items-center justify-center border-b-slate-100 border-b">
      <div className="flex w-full h-28 md:h-14 items-center bg-black text-white">
        <div className="flex w-4/5 items-center justify-center gap-3 text-sm  md:text-lg">
          <p className="flex w-4/5 items-center justify-center gap-3 text-sm  md:text-lg">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="" className="font-bold underline">
              ShopNow
            </a>
          </p>
        </div>
        <DropDown
          options={[
            { name: "English", value: "en" },
            { name: "Arabic", value: "ar" },
          ]}
          value={selectValue}
          onSelect={setSelectValue}
        />
      </div>
      <header
        className={`flex justify-between items-center gap-5 w-4/5 ${style.header}`}
      >
        <h1 className="font-bold text-2xl">Execlusive</h1>
        <nav className="hidden xl:block ">
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
        <div className="hidden w-4/5 md:flex xl:w-2/5 gap-10 items-center justify-center">
          <SearchInput
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            placeholder="what are you looking for?"
            className="w-full justify-between"
            onSearch={() => {
              alert(searchValue);
            }}
          />

          <div className="flex items-center justify-center gap-10">
            <button className="h-full w-8">
              <img width={"100%"} src="static/icons/heart.svg" alt="" />
            </button>
            <button className="h-full w-10">
              <img width={"100%"} src="static/icons/cart.svg" alt="" />
            </button>
          </div>
        </div>
        <button className="xl:hidden" onClick={handleOpenMenu}>
          <img
            width={32}
            src="static/icons/menu.svg"
            alt=""
            className={`transition-all  ${showMenu ? "rotate-12" : ""}`}
          />
        </button>
        <nav
          className={`transition-all h-0  opacity-0 ${
            showMenu ? "opacity-100 h-96 md:h-80" : ""
          } overflow-hidden flex flex-col items-center justify-center gap-5 py-5 absolute xl:hidden left-0 w-full md:top-[165px] top-[221px]  bg-gray-50 `}
        >
          <SearchInput
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            placeholder="what are you looking for?"
            onSearch={() => {
              alert(searchValue);
            }}
            className=" w-4/5 md:hidden justify-between"
          />
          <ul className="flex w-full flex-col items-center gap-5 md:gap-5 text-lg [&_li]:w-full [&_li]:text-center [&_li]:p-2 [&>*:hover]:bg-gray-100">
            <li >
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
      </header>
    </div>
  );
};

export default Header;
