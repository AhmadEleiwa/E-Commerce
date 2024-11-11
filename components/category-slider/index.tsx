import { FC } from "react";
import Carousel from "../carousel";
import TopHeader from "../carousel/top-header";
import CategorySliderType from "./category-slider.types";
import CategoryCard from "./category-card";
import CellPhoneIcon from "../icons/cell-phone";
import ComputerIcon from "../icons/computer";
import SmartwatchIcon from "../icons/smart-watch";
import CameraIcon from "../icons/camera";
import HeadphoneIcon from "../icons/headphone";
import GamingIcon from "../icons/gaming";

const CategorySlider: FC<CategorySliderType> = ({ className }) => {
  return (
    <Carousel
      topHeader={<TopHeader title="Browse By Category" subTitle="Categories" />}
      className={className}
    >
      <CategoryCard>
        <CellPhoneIcon  />
        <p>Phones</p>
      </CategoryCard>
      <CategoryCard>
        <ComputerIcon/>
        <p>Computer</p>
      </CategoryCard>
      <CategoryCard>
        <SmartwatchIcon/>
        <p>Smart Watch</p>
      </CategoryCard>
      <CategoryCard>
        <CameraIcon/>
        <p>Camera</p>
      </CategoryCard>
      <CategoryCard>
        <HeadphoneIcon/>
        <p>HeadPhones</p>
      </CategoryCard>
      <CategoryCard>
        <GamingIcon/>
        <p>Gaming</p>
      </CategoryCard>
    </Carousel>
  );
};

export default CategorySlider;
