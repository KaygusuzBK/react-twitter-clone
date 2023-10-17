import Topic from "./topic";
import { topics } from "../../../../utils/consts";
import classNames from "classnames";
import { Link, useHref } from "react-router-dom";

function Topics({ count }) {
  const href = useHref();
  return (
    <>
      <div
        className={classNames(" bg-opacity-85  rounded-xl", {
          "bg-zinc-900": href !== `/explore` && href !== `/trends`,
        })}
      >
        <div className="justify-start items-center ">
          <div className="font-bold text-white text-lg p-2">
            İlgini çekebilecek gündemler
          </div>
          <div className="flex flex-col max-h-full overflow-y-auto -mt-2">
            {topics.map((topic, index) =>
              index < count ? <Topic key={index} topic={topic} /> : null
            )}
          </div>
          {count < topics.length ? (
            <div className="flex justify-center items-center p-2">
              <Link
                to="/trends"
                className="flex justify-center items-center text-blue-500 font-bold text-sm p-2 hover:bg-zinc-500 hover:bg-opacity-10 rounded-b-xl w-full"
              >
                Daha fazla göster
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Topics;

<Link to={"/trends"} className="flex justify-center items-center">
  <div className="flex justify-center items-center text-blue-500 font-bold text-sm p-2 hover:bg-zinc-500 hover:bg-opacity-10 rounded-b-xl w-full">
    Tümünü gör
  </div>
</Link>;
