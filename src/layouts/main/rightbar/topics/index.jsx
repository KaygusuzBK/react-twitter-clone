import Topic from "./topic";
import { topics } from "../../../../utils/consts";

function Topics() {
  return (
    <>
      <div className="bg-zinc-900 bg-opacity-85 mt-3 rounded-xl">
        <div className="justify-start items-center ">
          <div className="font-bold text-white text-lg p-2">
            İlgini çekebilecek gündemler
          </div>
          <div className="flex flex-col max-h-full overflow-y-auto">
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
