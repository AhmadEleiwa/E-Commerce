import { FC } from "react";
import InputType from "./input.types";

const Input: FC<InputType> = ({...props}) => {
  return <input className={`border-b-2 outline-none`} {...props} />;
};

export default Input
