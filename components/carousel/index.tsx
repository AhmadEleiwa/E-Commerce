"use client";
import { FC, useRef } from "react";
import CarouselType from "./carousel.types";
import style from "./style.module.css";

const Carousel: FC<CarouselType> = ({ children, topHeader,className }) => {
  const refDiv = useRef<HTMLDivElement>(null);
  const slideRightHandler = () => {
    if (refDiv) {
    }
    console.log(refDiv.current?.scrollWidth);
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
    <div className={`flex flex-col ${className}`}>
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

export default Carousel;
