import { useContext } from "react";
import { context } from "./LangaugeProvider";

const useLanguage = () => useContext(context);
export default useLanguage;