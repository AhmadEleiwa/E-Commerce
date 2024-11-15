"use client";

import BoxItems from "@/components/box-items";
import Button from "@/components/button";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import TopHeader from "@/components/carousel/top-header";
import { FC } from "react";

interface BestSellingType {
  products: any[];
}
const BestSelling: FC<BestSellingType> = ({ products }) => {
  return (
    <BoxItems
      // className="w-full"
      topHeader={
        <TopHeader
          title="Best Selling Products"
          subTitle="This Month"
          endItem={<Button>View All</Button>}
        />
      }
    >
      {products.slice(0, 4).map((p) => (
        <Card
          title={"Product Name"}
          showAddCartButton={true}
          showRating={true}
          price={1000}
          imgPath="static/images/product_test.png"
        />
      ))}
    </BoxItems>
  );
};
export default BestSelling;
