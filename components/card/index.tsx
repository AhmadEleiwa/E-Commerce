"use client";

import { FC } from "react";
import StarRating from "../star-rating";
const Card: FC<CardTpye> = ({
  title,
  price,
  discount = 0,
  isItNew = false,
  showAddCartButton = true,
  showRating = true,
  imgPath,
  initialRating
}) => {
  const calculateDiscount = (price: number, discount: number) => {
    return price - price * (discount / 100.0);
  };

  const addToCartHandler = () => {
    // Add To Cart Logic
  };
  const onRateHandler = (p:number) => {
    // On Change User Rate Logic

  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col [&:hover>.button]:bottom-0 [&:hover>.spacer]:h-14 items-center justify-center w-72 h-64 bg-cardSecondary rounded relative overflow-hidden">
        {/* labels */}
        {discount > 0 ? (
          <span
            className={`absolute top-3 left-3  bg-button2 text-textColor px-3 py-1  rounded`}
          >
            -{discount}%
          </span>
        ) : isItNew ? (
          <span
            className={`absolute top-3 left-3  bg-button1 text-textColor px-3 py-1  rounded`}
          >
            NEW
          </span>
        ) : undefined}

        <img className="w-4/5" src={imgPath} alt="" />
        <div className="h-0 spacer transition-all  "></div>
        {showAddCartButton && (
          <button
            className="absolute bottom-[-10em] overflow-hidden button transition-all w-full h-10 bg-black text-white"
            onClick={addToCartHandler}
          >
            Add To Cart{" "}
          </button>
        )}
      </div>
      <div>
        <h1>{title}</h1>
        <div className="flex gap-2">
          {discount > 0 && (
            <p className="text-button2">
              ${calculateDiscount(price, discount)}
            </p>
          )}
          <p className={`${discount > 0?"line-through":"text-button2"}`}>${price}</p>
        </div>
        {showRating && <StarRating initialRate={3} onRate={onRateHandler} />}
      </div>
    </div>
  );
};

export default Card;
