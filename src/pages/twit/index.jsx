import { useSelector } from "react-redux";
import WhereIsThis from "~/components/whereIsThis";
import { FaArrowLeft } from "react-icons/fa";
import { useHref, useParams } from "react-router-dom";
import PostLayout from "~/pages/twit/postLayout";

function TwitPage() {
  const { slug } = useParams();
  var href = useHref();
  let username = href.split("/")[2];
  let id = href.split("/")[3] - 1;
  const { accounts } = useSelector((state) => state.auth);
  var tweet = null;
  var nowAccount = null;
  
  accounts.forEach((account) => {
    if (account.username === username) {
      tweet = account.info.tweets[id];
      nowAccount = account;
    }
  });

  return (
    <>
      <div className="flex justify-start items-center">
        <FaArrowLeft className="text-white text-md rounded-full border border-black m-3 w-10 h-10 hover:bg-gray-700 hover:bg-opacity-80 p-3 -mr-2" />
        <WhereIsThis text={"Gönderi"} />
      </div>
      <div>
        <PostLayout
          twit={tweet}
          avatar={nowAccount.avatar}
          username={nowAccount.username}
          fullName={nowAccount.fullName}
        />
      </div>
    </>
  );
}

export default TwitPage;
