"use client";
import { FC, useState } from "react";
import HeaderProps from "./header.types";
import SearchInput from "../search-input";
import DropDown from "../dropdown";
import { getDirection, getText, LanguagesType } from "@/public/static/localize/language";
import { usePathname } from "next/navigation";
import useLanguage from "@/hooks/Language/useLanguage";
const Header: FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const {lang,changeLanague} = useLanguage();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const routeStyle = "underline underline-offset-[4px] decoration-gray-300";
  const pathName = usePathname();
  console.log(pathName)
  const routes = [
    {
      name:getText(lang,"route.home"),
      href: "/",
    },
    {
      name:getText(lang,"route.contact"),
      href: "/contact",
    },
    {
      name:getText(lang,"route.about"),
      href: "/about",
    },
    {
      name:getText(lang,"route.signup"),
      href: "/singup",
    },
  ];
  const searchPlaceholder =
    getText(lang,"input.search.placehholder");
  const handleOpenMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const selectHandler = (val: string) => {
    changeLanague(val as LanguagesType);
  };
  return (
    <div className="w-full flex flex-col gap-11 items-center justify-center border-b-slate-100 border-b">
      <div className="flex w-full h-28 md:h-14 items-center bg-black text-white">
        <div className="flex w-4/5 items-center justify-center gap-3 text-sm lg:text-lg">
          <p
            dir={getDirection(lang)}
            className="flex w-4/5 items-center justify-center gap-3 text-sm lg:text-lg"
          >
            {getText(lang,"topheader.content")}
            <a href="" className="font-bold underline">
              {getText(lang,"topheader.shownow")}
            </a>
          </p>
        </div>
        <DropDown
          options={[
            {
              name: getText(lang,"langauge.english"),
              value: "en",
            },
            {
              name: getText(lang,"langauge.arabic"),
              value: "ar",
            },
          ]}
          value={lang}
          onSelect={selectHandler}
        />
      </div>
      <header
        className={`flex justify-between items-center gap-5 w-4/5 h-[4em]`}
      >
        <h1 className="font-bold text-2xl">
          {getText(lang,"logo.title")}
        </h1>
        <nav className="hidden xl:block ">
          <ul
            dir={getDirection(lang)}
            className="flex gap-16 text-lg"
          >
            {routes.map((route) => {
              return (
                <li>
                  <a
                    href={route.href}
                    className={`${pathName === route.href ? routeStyle : ""}`}
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
          } overflow-hidden z-10 flex flex-col items-center justify-center gap-5 py-5 absolute xl:hidden left-0 w-full md:top-[165px] top-[221px]  bg-gray-50 `}
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
                    className={`${pathName === route.href ? routeStyle : ""}`}
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
