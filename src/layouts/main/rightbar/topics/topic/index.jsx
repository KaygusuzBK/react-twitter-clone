import classNames from "classnames";
import { Link, useHref } from "react-router-dom";

function Topic({ topic }) {
  const href = useHref();
  return (
    <Link to={`/topic/${topic.topic.value}`}>
      <div
        className={classNames(
          "bg-opacity-85 mt-3 rounded-xl hover:bg-zinc-500 hover:bg-opacity-20 w-full",
          {
            "bg-black": href === `/explore`,
            "bg-zinc-900": href === `/`,
          }
        )}
      >
        <div className="flex flex-col justify-center items-start p-2">
          <div className="text-white text-opacity-50 font-thin text-sm">
            {topic.title}
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="font-bold text-base">{topic.topic.value}</div>
            <div className="justify-end items-center flex flex-row">
              <button
                onClick={() => alert("Takip edildi")}
                className="rounded-full hover:bg-blue-600 hover:text-black bg-opacity-50 px-3"
              >
                ...
              </button>
            </div>
          </div>
          <div className="text-white text-opacity-50 text-sm font-thin">
            {topic.postCount}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Topic;
