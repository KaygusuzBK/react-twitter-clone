import WhereIsThis from "~/components/whereIsThis";
import PostChoice from "./postChoice";
import TwitForm from "~/components/twitForm";
import { useSelector } from "react-redux";

export default function Home() {
  const { accounts } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <WhereIsThis text="Anasayfa" />
      </div>

      <div>
        <PostChoice />
      </div>
      <div className="">
        {accounts.map((account) =>
          account.info.tweets.map((twit) => (
            <TwitForm
              key={twit.id}
              ımage={account.avatar}
              fullName={account.fullName}
              username={account.username}
              twit={twit}
            />
          ))
        )}
      </div>
    </>
  );
}
