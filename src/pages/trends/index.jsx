import Topics from "~/layouts/main/rightbar/topics";
import { topics } from "~/utils/consts";

function Trends() {
  var counter = topics.length;
  return (
    <>
      <div className="w-full ">
        <Topics count={counter} />
      </div>
    </>
  );
}

export default Trends;
