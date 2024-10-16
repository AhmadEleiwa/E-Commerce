import { PropsWithChildren } from "react";
type option ={
    name:string;
    value:string;
}
interface DropDownProps {
    options:option[]
    value:string
    onSelect:(val:string)=>void
}

export default DropDownProps