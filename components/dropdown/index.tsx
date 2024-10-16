import { FC, useEffect, useRef, useState } from "react";
import DropDownProps from "./dropdown.types";

const DropDown: FC<DropDownProps> = ({ options, value, onSelect }) => {
  const [shown, setShown] = useState<boolean>(false);
  const val = options.find((p) => p.value === value);

  const closeHandler = () => {
    setShown(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", closeHandler);
    return () => {
      document.body.removeEventListener("click", closeHandler);
    };
  }, []);
  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        setShown(!shown);
      }}
      className="flex items-center gap-2 relative"
    >
      <p>{val ? val.name : "select"}</p>
      <button>
        <img src="static/icons/arow-down.svg" alt="" />
      </button>

      <div className={`${!shown ? "hidden" : ""} absolute top-10 bg-black`}>
        {options.map((option) => {
          return (
            <button
              className="w-full  p-1"
              onClick={(event) => {
                event.stopPropagation();

                // closeHandler();
                onSelect(option.value);
              }}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
