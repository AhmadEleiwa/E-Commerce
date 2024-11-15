"use client"
import { FC } from "react";
import ButtonType from "./button.types";

const Button: FC<ButtonType> = ({
  children,
  className,
  variant='primary',
  size='normal',
  ...props
}) => {
    let vari =""
    if(variant==='primary'){
        vari="bg-button2 text-textColor hover:bg-buttonHover"
    }else{
        vari="bg-transparent text-textColor2 border border-black hover:border-opacity-50 hover:text-textColor1"
    }
    let fontSize="h-14 w-56"
    if(size==='small'){
        fontSize="h-11 w-48"
    }
  return (
    <button className={`${vari} ${fontSize} rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
