import { NavLink } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineMessage, AiOutlineGif } from "react-icons/ai";
import { FaHeart, FaRetweet } from "react-icons/fa";
import { GoShare, GoFileMedia } from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import { BsEmojiFrown } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";
import PhotoPost from "~/components/twitForm/photo/index";

function PostLayout({ twit, avatar, username, fullName }) {
  const [isInputFocusedTop, setInputFocusedTop] = useState(false);
  const senbBtn = useRef();
  const textarea = useRef();

  var tweetTypeImage = typeof twit.tweet === "object";

  return (
    <>
      <div>
        {/* Avatar ve isim */}
        <div className="flex justify-start items-start -mt-2 -mb-1">
          <div className="flex justify-center items-center">
            <img
              src={avatar}
              className="rounded-full border border-black m-3 w-10 h-10"
              alt="avatar"
            />
            <div className="flex flex-col">
              <div className="text-white font-bold">{fullName}</div>
              <div className="text-zinc-500 text-sm">{username}</div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="flex justify-start items-start ml-4 mt-1">
          {tweetTypeImage ? (
            <div className="w-full h-full">
              <PhotoPost images={twit.tweet} />
            </div>
          ) : (
            <div className="text-white break-words w-full">{twit.tweet}</div>
          )}
        </div>
        {/* Tarih */}
        <div>
          <div className="flex justify-start items-center ml-4 mt-2 py-2 gap-3">
            <div className="text-zinc-500 text-sm">ÖS 4:44</div>
            <div className="text-zinc-500 text-sm">{twit.date}</div>
            <div className="text-zinc-500 text-sm flex gap-1">
              <div className="text-white">44</div>Görüntülenme"
            </div>
          </div>
        </div>
        <div className="border border-spacing-0.5 border-zinc-700 ml-2 mr-2" />
        {/* Gönderi Etkileşimleri */}
        <div className="flex justify-start items-center p-3 hover:bg-zinc-500 hover:bg-opacity-10 rounded ">
          <NavLink to={"#"}>
            <div className="flex justify-start items-center gap-1">
              <VscGraph className="text-white text-opacity-50" />
              <div className="text-white text-opacity-50">
                Gönderi etkileşimlerini görüntüle
              </div>
            </div>
          </NavLink>
        </div>
        <div className="border border-spacing-0.5 border-zinc-700 ml-2 mr-2" />
        {/* Butonlar */}
        <div className="flex justify-between items-center m-4">
          <AiOutlineMessage className="text-white text-4xl text-opacity-50 rounded-full p-2 hover:bg-blue-500 hover:bg-opacity-25" />
          <FaRetweet className="text-white text-4xl text-opacity-50 rounded-full p-2 hover:bg-green-500 hover:bg-opacity-25" />
          <FaHeart className="text-white text-4xl text-opacity-50 rounded-full p-2 hover:bg-red-500 hover:bg-opacity-25" />
          <BiBookmark className="text-white text-4xl text-opacity-50 rounded-full p-2 hover:bg-blue-500 hover:bg-opacity-25" />
          <GoShare className="text-white text-4xl text-opacity-50 rounded-full p-2 hover:bg-blue-500 hover:bg-opacity-25" />
        </div>
        <div className="border border-spacing-0.5 border-zinc-700 ml-2 mr-2" />
        <div>
          {/*  Yanıt Bölümü */}
          <div className="flex flex-col w-full ">
            {isInputFocusedTop && (
              <button
                type=""
                className="rounded-xl border-white border-opacity-20 text-xs ml-2 mt-2 p-1 "
              >
                <div className="flex justify-start items-center gap-1">
                  <div className="text-blue-500">{username}</div>
                  <div className="text-white">
                    adlı kullanıcıya yanıt olarak
                  </div>
                </div>
              </button>
            )}
            <textarea
              onFocus={() => {
                setInputFocusedTop(true);
              }}
              onBlur={() => {
                setInputFocusedTop(false);
              }}
              ref={textarea}
              className="bg-black p-4 text-white placeholder-white placeholder-opacity-50 h-16 focus-within:outline-none resize-none placeholder:text-xl placeholder:font-light"
              placeholder="Yanıtını Gönder"
            />
            <div className="flex flex-row justify-between items-center px-2  ">
              <div className="flex flex-row justify-between items-center">
                <GoFileMedia className="text-blue-500 rounded-lg h-8 w-8  hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                <AiOutlineGif className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                <BsEmojiFrown className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                <GoFileMedia className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
              </div>
              <div className="flex flex-row justify-end items-center">
                <button
                  ref={senbBtn}
                  className="bg-blue-500 hover:bg-blue-600 rounded-full text-white text-sm px-4 py-2 mr-5"
                  onClick={() => {
                    textarea.current.value = "";
                    textarea.current.blur();
                  }}
                >
                  Gönder
                </button>
              </div>
            </div>
            <div className="border border-spacing-0.5 border-zinc-700 mt-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostLayout;
