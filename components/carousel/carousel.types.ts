import { PropsWithChildren, ReactNode } from "react"

interface CarouselType extends PropsWithChildren{
    topHeader:ReactNode 
    className?:string
}
export default CarouselType