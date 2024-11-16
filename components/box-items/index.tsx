import { FC } from "react";
import BoxItemsType from "./box-items.types";

const BoxItems: FC<BoxItemsType> = ({ topHeader, children }) => {
  return (
    <div className="flex w-full items-start flex-col gap-8">
      {topHeader}
      <div className="flex w-full justify-between">{children}</div>
    </div>
  );
};

export default BoxItems;
