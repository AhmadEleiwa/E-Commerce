"use client";
import {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import CarouselType, { CarouselSliderType } from "./carousel.types";
import style from "./style.module.css";

const Carousel: FC<CarouselType> = ({ children, topHeader, className }) => {
  const refDiv = useRef<HTMLDivElement>(null);
  const slideRightHandler = () => {
    if (refDiv) {
    }
    if (refDiv.current?.scrollWidth) {
      console.log(
        (window.innerWidth / refDiv.current?.scrollWidth) *
          refDiv.current?.clientWidth
      );
    }
    refDiv.current?.scroll({
      left: refDiv.current?.scrollLeft + refDiv.current?.clientWidth,
      behavior: "smooth",
    });
  };
  const slideLeftHandler = () => {
    refDiv.current?.scroll({
      left: refDiv.current?.scrollLeft - refDiv.current?.clientWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className={`flex flex-col relative ${className}`}>
      {/* controll */}
      <div className="flex justify-between  items-center">
        {topHeader}

        <div className="flex gap-4">
          <button
            onClick={slideLeftHandler}
            className="text-lg p-5 bg-gray-50 rounded-full"
          >
            <img src="static/icons/arrow-left.svg" alt="" />
          </button>
          <button
            onClick={slideRightHandler}
            className="text-lg p-5 bg-gray-50 rounded-full"
          >
            <img src="static/icons/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      {/* slider */}
      <div
        ref={refDiv}
        className={`${style.slider} snap-mandatory snap-x [&>*]:snap-center  py-5 overflow-x-auto w-full flex gap-5 items-center justify-start  [&>*]:flex-shrink-0 `}
      >
        {children}
      </div>
    </div>
  );
};

export const CarouselSlider: FC<CarouselSliderType> = ({
  children,
  className,
  timeOut = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const refDiv = useRef<HTMLDivElement>(null);
  const slideHandler = (ind: number) => {
    const offset = ind - index;
    setIndex(ind);
    refDiv.current?.scroll({
      left: refDiv.current?.scrollLeft + refDiv.current?.clientWidth * offset,
      behavior: "smooth",
    });
  };

  const _slideInterval = () => {
    const nextIndex = index === (children as ReactNode[]).length - 1 ? 0 : index + 1;
    slideHandler(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(_slideInterval, timeOut);
    return () => clearInterval(interval);
  }, [index, timeOut]);

  return (
    <div className={`flex flex-col relative ${className}`}>
      {/* slider */}
      <div
        ref={refDiv}
        className={`${style.slider} snap-mandatory snap-x [&>*]:snap-center  py-5 overflow-x-auto w-full flex gap-5 items-center justify-start  [&>*]:flex-shrink-0 `}
      >
        {children}
      </div>
      <div className="flex absolute gap-4 bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        {(children as ReactNode[]).map((p, i) => {
          if (index === i)
            return (
              <span
                onClick={() => slideHandler(i)}
                className=" w-4 h-4 rounded-full border-white border  bg-secondary"
              ></span>
            );
          else
            return (
              <span
                onClick={() => slideHandler(i)}
                className=" w-4 h-4 rounded-full bg-white opacity-50  "
              ></span>
            );
        })}
      </div>
    </div>
  );
};

export default Carousel;
