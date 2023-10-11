import PostChoice from "./postChoice";
import WhereIsThis from "~/components/whereIsThis";

export default function Home() {
  return (
    <>
      <div>
        <WhereIsThis text="Anasayfa" />
      </div>

      <div>
        <PostChoice />
      </div>
      <div className="">

      </div>
    </>
  );
}
