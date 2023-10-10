import SearchBar from "./searchBar";
import Subscribe from "./subscribe";
import Topics from "./topics";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5 ">
      <SearchBar />
      <Subscribe />
      <Topics />
    </aside>
  );
}
