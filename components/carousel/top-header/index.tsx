"use client";
import { FC, useEffect, useRef, useState } from "react";
import TopHeaderType from "./top-header.types";
import React from "react";

const TopHeader: FC<TopHeaderType> = ({ title, subTitle, endItem }) => {
  return (
    <div className="w-full flex gap-16 items-end justify-between">
      <div className="flex flex-col gap-6">
        {subTitle ? (
          <>
            <span className="flex gap-2 items-center">
              <span className="w-5 h-10 bg-secondary rounded-md font-bold"></span>
              <h1 className="text-secondary">{subTitle}</h1>
            </span>

            <h2 className="text-4xl font-bold">{title}</h2>
          </>
        ) : (
          <span className="flex gap-2 items-center">
            <span className="w-5 h-10 bg-secondary rounded-md font-bold"></span>
            <h1 className="text-3xl ">{title}</h1>
          </span>
        )}
      </div>
      {endItem}
    </div>
  );
};

export default TopHeader;
