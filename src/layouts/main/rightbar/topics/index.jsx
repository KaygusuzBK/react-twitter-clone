import Topic from "./topic";
import { topics } from "../../../../utils/consts";
import classNames from "classnames";
import { useHref } from "react-router-dom";

function Topics() {
  const href = useHref();
  return (
    <>
      <div
        className={classNames(" bg-opacity-85 mt-3 rounded-xl", {
          "bg-black": href === `/explore`,
          "bg-zinc-900": href !== `/explore`,
        })}
      >
        <div className="justify-start items-center ">
          <div className="font-bold text-white text-lg p-2">
            İlgini çekebilecek gündemler
          </div>
          <div className="flex flex-col max-h-full overflow-y-auto -mt-2">
            {topics.map((topic, index) => (
              <Topic key={index} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Topics;
