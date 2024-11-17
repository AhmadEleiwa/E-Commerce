"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import TopClockHeader from "@/components/carousel/top-clock-header";
import { FC } from "react";

interface FresheSalesType {
  products: any[];
}
const FresheSales: FC<FresheSalesType> = ({ products }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Carousel
      className="w-full"
        topHeader={
          <TopClockHeader
            title="Fresh Sales"
            subTitle="Today's"
            endDate={new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)}
          />
        }
      >
        {products.map((p) => (
          <Card
            id={p+""}
            title={"Product Name"}
            showAddCartButton={true}
            showRating={true}
            price={1000}
            imgPath="static/images/product_test.png"
            initialRating={4}
            addedToWishList={false}
          />
        ))}
      </Carousel>
      <Button onClick={() => console.log("Hello World")}>
        View ALL Products
      </Button>
    </div>
  );
};
export default FresheSales;
