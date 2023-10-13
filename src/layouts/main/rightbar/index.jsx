import { useHref } from "react-router-dom";
import SearchBar from "./searchBar";
import Subscribe from "./subscribe";
import Topics from "./topics";

export default function RightBar() {
  const href = useHref();
  const shouldShowSearcBar = href !== "/explore" && <SearchBar />;
  const shouldShowTopics = href !== "/explore" && <Topics count={7} />;

  return (
    <aside className="w-[350px] mr-2.5 ">
      {<SearchBar /> && shouldShowSearcBar}
      <Subscribe />
      {<Topics count={7} /> && shouldShowTopics}
    </aside>
  );
}
