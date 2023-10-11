import { useHref } from "react-router-dom";
import SearchBar from "./searchBar";
import Subscribe from "./subscribe";
import Topics from "./topics";

export default function RightBar() {
  const href = useHref();
  const shouldShow = href !== "/explore" && <SearchBar />;

  return (
    <aside className="w-[350px] mr-2.5 ">
      {<SearchBar /> && shouldShow}
      <Subscribe />
      <Topics />
    </aside>
  );
}
