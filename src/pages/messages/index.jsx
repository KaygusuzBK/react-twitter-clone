import WhereIsThis from "~/components/whereIsThis";
import { FiSettings } from "react-icons/fi";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import SearchBar from "~/layouts/main/rightbar/searchBar";

export default function Messages() {
  return (
    <>
      <div className="h-full  border-zinc-500 border-opacity-50 max-w-[380px] flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-500 border-opacity-50">
          {/* ÜST BAR */}
          <div className="flex justify-around items-center">
            <WhereIsThis text={"Mesajlar"} />
          </div>
          <div className="flex justify-around items-center px-5">
            <FiSettings className="text-white rounded-full w-8 h-8 p-2 hover:bg-zinc-700 " />
            <BiSolidMessageSquareAdd className="text-white rounded-full w-8 h-8 p-2 hover:bg-zinc-700 ml-2" />
          </div>
        </div>
        <div className="p-3 -mt-1">
          <SearchBar />
        </div>
      </div>
    </>
  );
}
