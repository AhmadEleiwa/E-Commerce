import { FC, PropsWithChildren } from "react";
const CategoryCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="!stroke-black hover:!stroke-white w-[170px] h-[145px] border border-black border-opacity-30 rounded flex flex-col justify-center items-center hover:text-white hover:bg-secondary ">
      {children}
    </div>
  );
};

export default CategoryCard;
