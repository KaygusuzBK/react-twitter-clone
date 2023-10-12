import { AiOutlineMessage } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHeart, FaRetweet } from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { useSelector } from "react-redux";
import ProfileAvatar from "~/pages/profile/profileInfo/profileAvatar";

function TwitForm({ ımage, fullName, username, twit }) {
  console.log("twit", twit);
  var replyLength = twit.reply.length;
  console.log("replyLength", replyLength);
  return (
    <>
      <div className="flex items-start w-full p-2 border-b border-zinc-700 hover:bg-zinc-950 ">
        <div className="w-10 h-10 ml-1 mt-4">
          <ProfileAvatar Image={ımage} />
        </div>
        <div className="flex flex-col justify-start items-start px-2 py-3 ml-1 w-full">
          <div className="flex w-full">
            <div className="font-bold">{fullName}</div>
            <div className="text-gray-500 ml-2">{username}</div>
            <div className="text-gray-500 ml-2">.</div>
            <div className="text-gray-500 ml-2">23.02.2023</div>
          </div>
          <div className="flex w-full">
            <p>{twit.tweet}</p>
          </div>
          <div className="flex justify-between items-center w-full mt-1 ml-2">
            <button className="p-2 hover:bg-blue-600 hover:bg-opacity-50 rounded-full flex items-center">
              <AiOutlineMessage className="text-gray-500 hover:text-blue-500 rounded-full w-4 h-4" />
              <div className="font-thin text-sm text-zinc-400">{twit.like}</div>
            </button>
            <button className="p-2 hover:bg-green-600  hover:bg-opacity-50 rounded-full flex items-center">
              <FaRetweet className="text-gray-500 hover:text-green-500 w-4 h-4" />
              <div className="font-thin text-sm text-zinc-400">
                {twit.retweet}
              </div>
            </button>
            <button className="p-2 hover:bg-red-600  hover:bg-opacity-50 rounded-full flex items-center">
              <FaHeart className="text-gray-500 hover:text-red-500 w-4 h-4" />
              <div className="font-thin text-sm text-zinc-400">{twit.like}</div>
            </button>
            <button className="p-2 hover:bg-blue-600  hover:bg-opacity-50 rounded-full flex items-center">
              <BsGraphUpArrow className="text-gray-500 hover:text-blue-500 w-4 h-4" />
              <div className="font-thin text-sm text-zinc-400">
                {replyLength}
              </div>
            </button>
            <button className="p-2 hover:bg-blue-600  hover:bg-opacity-50 rounded-full flex items-center">
              <GoShare className="text-gray-500 hover:text-blue-500 w-4 h-4" />
              <div className="font-thin text-sm text-zinc-400"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwitForm;
