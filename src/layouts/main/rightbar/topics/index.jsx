import { Link } from "react-router-dom";
import Topic from "./topic";
import {topics} from "../../../../utils/consts";


function Topics() {
  return (
    <>
      <div className="bg-zinc-900 bg-opacity-85 mt-3 rounded-xl">
        <div className="justify-start items-center ">
          <div className="font-bold text-white text-lg p-2">
            İlgini çekebilecek gündemler
          </div>
          <div className="flex flex-wrap justify-start items-center">
          {topics.map((topic) => (
            <Topic key={topic.value} topic={topic} />
          ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default Topics;
