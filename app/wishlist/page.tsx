import BoxItems from "@/components/box-items";
import Button from "@/components/button";
import Card from "@/components/card";
import TopHeader from "@/components/carousel/top-header";
import { FC } from "react";

const WishList: FC = () => {
  const products = [1, 1, 1, 2];
  return (
    <main className="m-auto mt-10 w-4/5 flex flex-col gap-10">
      <BoxItems
        topHeader={
          <div className="flex justify-between items-center w-full">
            <p>WishList (4)</p>
            <Button variant="secondary">Move All To Bag</Button>
          </div>
        }
      >
        {products.map((p) => (
          <Card
            id={p + ""}
            title={"Product Name"}
            showAddCartButton={true}
            showRating={false}
            price={1000}
            imgPath="static/images/product_test.png"
            initialRating={4}
            addedToWishList={true}
          />
        ))}
      </BoxItems>
      <BoxItems
        topHeader={
          <TopHeader
            title="Just For You"
            endItem={<Button variant="secondary">See All</Button>}
          />
        }
      >
        {products.map((p) => (
          <Card
            id={p + ""}
            title={"Product Name"}
            showAddCartButton={true}
            showRating={false}
            price={1000}
            imgPath="static/images/product_test.png"
            initialRating={4}
            addedToWishList={true}
          />
        ))}
      </BoxItems>
    </main>
  );
};

export default WishList;
