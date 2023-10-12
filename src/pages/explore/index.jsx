import { AiOutlineSetting } from "react-icons/ai";
import SearchBar from "~/layouts/main/rightbar/searchBar";
import Topics from "~/layouts/main/rightbar/topics";

export default function Explore() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-11/12 ml-4 -mt-1 mr-4">
          <SearchBar />
        </div>
        <div className="w-1/12 flex justify-end items-end">
          <button className="">
            <AiOutlineSetting className="text-4xl mr-4 mt-2 hover:bg-gray-200 hover:bg-opacity-20 rounded-full p-2" />
          </button>
        </div>
      </div>
      <div className="w-full h-1/2">
        <Topics />
      </div>
    </>
  );
}
