import WhereIsThis from "~/components/whereIsThis";
import PostChoice from "./postChoice";
import TwitForm from "~/components/twitForm";
import { useSelector } from "react-redux";
import { VList } from "virtua";
import { WVList } from "virtua";

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
      <div>
        <WVList>
          {accounts.map((account) =>
            account.info.tweets.map((twit) => (
              <TwitForm
                key={Math.random() * twit.id}
                ımage={account.avatar}
                fullName={account.fullName}
                username={account.username}
                twit={twit}
              />
            ))
          )}
        </WVList>
      </div>
    </>
  );
}
