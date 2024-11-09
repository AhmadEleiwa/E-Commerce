import { PropsWithChildren, ReactNode } from "react"

interface CarouselType extends PropsWithChildren{
    topHeader:ReactNode
    className?:string
    children:ReactNode | ReactNode[] | undefined
}
export interface CarouselSliderType extends PropsWithChildren{
    className:string
    timeOut?:number
}
export default CarouselType