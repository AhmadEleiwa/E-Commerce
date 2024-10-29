import Carousel from "@/components/carousel";
import TopClockHeader from "@/components/carousel/top-clock-header";
import Footer from "@/components/foorer";
import Header from "@/components/header";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {

  return (
    <div>
      <main className="min-h-[30em]">
        <Suspense fallback={<p>loading</p>}>
          <Carousel className="w-4/5 m-auto"  topHeader={<TopClockHeader title="Fresh Sales"  subTitle="Today's" endDate={ new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)} />} >
            {[1,2,3,4,5,6,7,8,9,10,12,13].map(p=><div className="w-[40em] h-96 bg-red-50">{p}</div>)}
          </Carousel>
        </Suspense>
      </main> 
    </div>
  );
}
