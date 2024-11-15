"use client";

import { FC, useState } from "react";

type ratingRange = 1 | 2 | 3 | 4 | 5;
interface StartRatingType {
  initialRate: ratingRange;
  onRate:(val:ratingRange)=>void
}
const StarRating: FC<StartRatingType> = ({ initialRate, onRate }) => {
  const [rate, setRate] = useState(initialRate);
  const oldVal = initialRate;
  let lst: ratingRange[] = [1, 2, 3, 4, 5];
  const ratingHandler  = (p:ratingRange)=>{
    setRate(p);
    onRate(p);
  }
  return (
    <div className="flex items-center">
      {lst.map((p) => {
        let color = "yellow-300";
        if (rate >= p) {
          color = "yellow-400";
        } else if (oldVal >= p) color = "yellow-300";
        else color = "gray-400";

        return (
          <svg
            className={`w-4 h-4 text-${color} me-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={() => ratingHandler(p)}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        );
      })}

      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        4.95
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        5
      </p>
    </div>
  );
};

export default StarRating;
