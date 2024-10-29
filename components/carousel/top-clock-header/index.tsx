"use client";
import { FC, useEffect, useRef, useState } from "react";
import TopClockHeaderType from "./top-clock-header.types";
import React from "react";
import { getText } from "@/public/static/localize/language";
import useLanguage from "@/hooks/Language/useLanguage";

const TopClockHeader: FC<TopClockHeaderType> = ({
  title,
  subTitle,
  endDate,
}) => {
  const {lang, changeLanague} = useLanguage();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [date, setDate] = useState<{ [index: string]: number }>({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
  });
  function getTimeDiff(startDate: Date, endDate: Date) {
    if (endDate.getTime() < startDate.getTime())
      return {
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
      };
    const diffInMs: number = Math.abs(endDate.getTime() - startDate.getTime()); // Difference in milliseconds

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  const UpdateDate = () => {
    const newDate = getTimeDiff(new Date(), endDate);
    setDate(newDate);
  };
  useEffect(() => {
    intervalRef.current = setInterval(UpdateDate, 1000);
    console.log(date);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Always works, even after re-renders
      }
    };
  }, []);
  return (
    <div className="w-full flex gap-16 items-end">
      <div className="flex flex-col gap-10">
        <span className="flex gap-2 items-center">
          <span className="w-5 h-10 bg-secondary rounded-md font-bold"></span>
          <h1 className="text-secondary">{subTitle}</h1>
        </span>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="flex gap-6 ">
        {["days", "hours", "minutes", "seconds"].map((p) => {
          if (p === "seconds")
            return (
              <div
                key={p}
                className="flex flex-col items-start justify-center gap-2"
              >
                <span className="text-lg font-semibold">{getText(lang, 'date.'+p)}</span>
                <span className="text-4xl font-bold">
                  {date[p] > 9 ? date[p] : "0" + date[p]}
                </span>
              </div>
            );
          else {
            return (
              <div
                key={p}
                className="flex flex-col items-start justify-center gap-2"
              >
                <span className="text-lg font-semibold">{getText(lang, 'date.'+p)}</span>
                <span className="text-4xl font-bold flex gap-6">
                  <p>{date[p] > 9 ? date[p] : "0" + date[p]}</p>
                  <p>:</p>
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TopClockHeader;
