import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
}

export default SearchInputProps;
