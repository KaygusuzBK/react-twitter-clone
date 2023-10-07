import SearchBar from "./searchBar";
import Subscribe from "./subscribe";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5 ">
      <SearchBar />
      <Subscribe />
    </aside>
  );
}
