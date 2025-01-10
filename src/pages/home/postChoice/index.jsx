import { useState } from "react";
import OtherButton from "../../../components/otherButton";
import classNames from "classnames";

function PostChoice() {
  const [activeBtn, setActiveBtn] = useState(0);

  const handleActiveBtn = (isActive) => {
    setActiveBtn(isActive);
  };

  return (
    <>
      <div className="w-full flex justify-around h-12">
        <OtherButton
          onClick={() => handleActiveBtn(0)}
          isActive={activeBtn === 0}
          className={classNames(
            "text-zinc-400 hover:bg-zinc-900 bg-opacity-60 w-1/2",
            {
              "border-b-4 border-blue-500 text-white font-extrabold -mb-0.5":
                activeBtn === 0,
            }
          )}
        >
          Sana özel
        </OtherButton>
        <OtherButton
          onClick={() => handleActiveBtn(1)}
          isActive={activeBtn === 1}
          className={classNames(
            "text-zinc-400 hover:bg-zinc-900 bg-opacity-60 w-1/2",
            {
              "border-b-4 border-blue-500 text-white font-extrabold -mb-0.5":
                activeBtn === 1,
            }
          )}
        >
          Takip Edilenler
        </OtherButton>
      </div>
      <div className="border border-white border-opacity-20" />
    </>
  );
}

export default PostChoice;
