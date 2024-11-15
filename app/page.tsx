import Button from "@/components/button";
import Card from "@/components/card";
import Carousel, { CarouselSlider } from "@/components/carousel";
import TopClockHeader from "@/components/carousel/top-clock-header";
import CategorySlider from "@/components/category-slider";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <main className="min-h-[30em]">
        <CarouselSlider className="w-4/5 m-auto">
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <div className="w-[100%] h-96 bg-black text-white flex items-center justify-center text-2xl">
              {p}
            </div>
          ))}
        </CarouselSlider>

        <Suspense fallback={<p>loading</p>}>
          <Carousel
            className="w-4/5 m-auto"
            topHeader={
              <TopClockHeader
                title="Fresh Sales"
                subTitle="Today's"
                endDate={
                  new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
                }
              />
            }
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((p) => (
              <Card title={"Product Name"} showAddCartButton={true} showRating={true}  imgPath="static/images/product_test.png"/>
            ))}
          </Carousel>
        </Suspense>
        <CategorySlider className="w-4/5 m-auto" />
      </main>
    </div>
  );
}
