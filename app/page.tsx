import Button from "@/components/button";
import Card from "@/components/card";
import Carousel, { CarouselSlider } from "@/components/carousel";
import TopClockHeader from "@/components/carousel/top-clock-header";
import CategorySlider from "@/components/category-slider";
import { Suspense } from "react";
import FresheSales from "./components/FreshSales";
import BestSelling from "./components/BestSelling";
import TopHeader from "@/components/carousel/top-header";

export default function Home() {
  const tags_dummy = [
    "Woman's Fashion",
    "men's Fashion",
    "Electrionics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <main className="flex w-[90%] md:w-4/5 m-auto flex-col justify-center items-center gap-14 ">
      <div className="w-full h-[16em] md:h-[27em] flex items-center justify-between mb-20">
        <ul className=" h-96 gap-3 items-start flex-col hidden md:flex">
          {tags_dummy.map((p) => (
            <li>{p}</li>
          ))}
        </ul>
        <div className="w-[1px] h-full bg-gray-200 hidden md:block"></div>
        <CarouselSlider className="w-full h-full md:w-4/5">
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <div className="w-[100%] h-96 bg-black text-white flex overflow-y-hidden items-center justify-center text-2xl">
              {
                <img src={`https://picsum.photos/1280/40${p}`} height={'100%'} alt="" />
              }
            </div>
          ))}
        </CarouselSlider>
      </div>
      <Suspense fallback={<p>loading</p>}>
        <FresheSales products={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]} />
      </Suspense>
      <CategorySlider className="w-full m-auto" />

      <Suspense fallback={<p>loading</p>}>
        <BestSelling products={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]} />
      </Suspense>

      <div className="w-full flex flex-col gap-4">
        <TopHeader title="New Arrival" subTitle="Featured" />
        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-[35em] text-textColor">
          <div className="row-span-2 bg-black rounded  relative ">
            {/* <img width={'100%'} height={'100%'} src="static/images/playstation.png" alt="" /> */}
            <div className="flex flex-col justify-end absolute bottom-4 left-3 w-full z-[10] ">
              <h1>PlayStation 5</h1>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="">Shop Now</a>
            </div>
            <img
              src="static/images/playstation.png"
              className="absolute left-[%] bottom-0 -z-0"
              width={"90%"}
              alt=""
            />
          </div>
          <div className="col-span-2 col-start-0 flex  flex-col justify-end bg-black p-4 rounded relative">
            <h1>Women’s Collections</h1>
            <p>Featured woman collections that give you another vibe.</p>
            <a href="">Shop Now</a>

            <img
              className="absolute right-[1%] h-full bottom-0 -z-0"
              src="static/images/attractive-woman-wearing-hat-posing-black-background 1.png"
              alt=""
            />
          </div>
          <div className="col-start-2 bg-black p-4 rounded">Third Item</div>
          <div className="col-start-3 bg-black p-4 rounded">Fourth Item</div>
        </div>
      </div>
    </main>
  );
}
