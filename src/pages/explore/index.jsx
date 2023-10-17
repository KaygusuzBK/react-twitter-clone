import { AiOutlineSetting } from "react-icons/ai";
import SearchBar from "~/layouts/main/rightbar/searchBar";
import Topics from "~/layouts/main/rightbar/topics";
import { useSelector } from "react-redux";
import TwitForm from "~/components/twitForm";

export default function Explore() {
  const { accounts } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-11/12 ml-4 -mt-1 mr-4">
          <SearchBar />
        </div>
        <div className="w-1/12 flex justify-end items-end">
          <button className="">
            <AiOutlineSetting className="text-4xl mr-4 mt-2 hover:bg-gray-200 hover:bg-opacity-20 rounded-full p-2" />
          </button>
        </div>
      </div>
      <div className="w-full ">
        <Topics count={4} />
        <div className="bg-zinc-500 w-full h-1 mb-2 " />
      </div>
      <div>
        {accounts.map((account) =>
          account.info.tweets.map((twit) => (
            <div key={twit.id}>
              <TwitForm
                key={twit.id}
                ımage={account.avatar}
                fullName={account.fullName}
                username={account.username}
                twit={twit}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}
