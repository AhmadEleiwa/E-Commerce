"use client";
import {
  LanguagesType,
} from "@/public/static/localize/language";
import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

interface LangaugeStateType {
  lang: LanguagesType;
  changeLanague: (val: LanguagesType) => void;
}
export const context = createContext<LangaugeStateType>({
  lang: "en",
  changeLanague(val) {},
});

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguagesType>("en");
  const changeCurrentLanguage = (val:LanguagesType) =>{
    localStorage.setItem('settings.language', val)
    setCurrentLanguage(val)
  }
  useEffect(()=>{
    const lang = localStorage.getItem('settings.language')
    console.log(lang)
    if(lang){
        setCurrentLanguage(lang as LanguagesType)
    }
  },[])
  return (
    <context.Provider
      value={{ lang: currentLanguage, changeLanague: changeCurrentLanguage }}
    >
      {children}
    </context.Provider>
  );
};
