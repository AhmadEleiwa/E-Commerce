"use client";
import { FC, useRef, useState } from "react";
import HeaderProps from "./header.types";
import SearchInput from "../search-input";
import DropDown from "../dropdown";
import {
  langauge_localize,
  LanguagesType,
} from "@/public/static/localize/language";
const Header: FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<LanguagesType>("en");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const linkActive: string =
    langauge_localize[selectValue].context["route.home"];
  const routeStyle = "underline underline-offset-[4px] decoration-gray-300";
  const routes = [
    { name: langauge_localize[selectValue].context["route.home"], href: "" },
    { name: langauge_localize[selectValue].context["route.contact"], href: "" },
    { name: langauge_localize[selectValue].context["route.about"], href: "" },
    { name: langauge_localize[selectValue].context["route.signup"], href: "" },
  ];
  const searchPlaceholder =
    langauge_localize[selectValue].context["input.search.placehholder"];
  const handleOpenMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const selectHandler = (val: string) => {
    setSelectValue(val as LanguagesType);
  };
  return (
    <div className="w-full flex flex-col gap-11 items-center justify-center border-b-slate-100 border-b">
      <div className="flex w-full h-28 md:h-14 items-center bg-black text-white">
        <div className="flex w-4/5 items-center justify-center gap-3 text-sm lg:text-lg">
          <p
            dir={langauge_localize[selectValue].dir}
            className="flex w-4/5 items-center justify-center gap-3 text-sm lg:text-lg"
          >
            {langauge_localize[selectValue].context["topheader.content"]}
            <a href="" className="font-bold underline">
              {langauge_localize[selectValue].context["topheader.shownow"]}
            </a>
          </p>
        </div>
        <DropDown
          options={[
            {
              name: langauge_localize[selectValue].context["langauge.english"],
              value: "en",
            },
            {
              name: langauge_localize[selectValue].context["langauge.arabic"],
              value: "ar",
            },
          ]}
          value={selectValue}
          onSelect={selectHandler}
        />
      </div>
      <header
        className={`flex justify-between items-center gap-5 w-4/5 h-[4em]`}
      >
        <h1 className="font-bold text-2xl">
          {langauge_localize[selectValue].context["logo.title"]}
        </h1>
        <nav className="hidden xl:block ">
          <ul
            dir={langauge_localize[selectValue].dir}
            className="flex gap-16 text-lg"
          >
            {routes.map((route) => {
              return (
                <li>
                  <a
                    href={route.href}
                    className={`${linkActive === route.name ? routeStyle : ""}`}
                  >
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden w-4/5 md:flex xl:w-[30em] gap-10 items-center justify-center">
          <SearchInput
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            placeholder={searchPlaceholder}
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
            placeholder={searchPlaceholder}
            onSearch={() => {
              alert(searchValue);
            }}
            className=" w-4/5 md:hidden justify-between"
          />
          <ul className="flex w-full flex-col items-center gap-5 md:gap-5 text-lg [&_li]:w-full [&_li]:text-center [&_li]:p-2 [&>*:hover]:bg-gray-100 ">
            {routes.map((route) => {
              return (
                <li>
                  <a
                    href={route.href}
                    className={`${linkActive === route.name ? routeStyle : ""}`}
                  >
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
