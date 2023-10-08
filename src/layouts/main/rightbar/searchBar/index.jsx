import classNames from "classnames";
import { FaSearch } from "react-icons/fa";
function SearchBar() {
  return (
    <>
      <div className="rounded-full bg-zinc-800 bg-opacity-90 flex items-center mt-2 p-2 w-full focus-within:bg-black focus-within:border focus-within:border-blue-500  focus-within:ring-blue-500 focus-within:ring-opacity-50 absolutetop-0 absoluteleft-0 z-10">
        <button>
          <FaSearch
            className={classNames(
              "text-gray-400 text-lg m-1",
              "hover:text-blue-500"
            )}
          />
        </button>
        <input
          type="text"
          placeholder="Ara"
          className="bg-transparent outline-none pl-1 ml-2 w-full"
        />
      </div>
    </>
  );
}

export default SearchBar;
