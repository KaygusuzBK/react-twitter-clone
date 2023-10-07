import { FaSearch } from "react-icons/fa";
function SearchBar() {
  return (
    <>
      <div className="rounded-3xl bg-zinc-900 bg-opacity-60 flex items-center mt-2 p-2 w-full">
        <button>
          <FaSearch className="text-gray-400 text-lg m-1" />
        </button>
        <input
          type="text"
          placeholder="Ara"
          className="bg-transparent outline-none pl-1 ml-2 w-full "
        />
      </div>
    </>
  );
}

export default SearchBar;
