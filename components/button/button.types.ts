import { ButtonHTMLAttributes } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "normal";
}
export default ButtonType;
