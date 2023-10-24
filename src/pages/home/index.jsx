import WhereIsThis from "~/components/whereIsThis";
import PostChoice from "./postChoice";
import TwitForm from "~/components/twitForm";
import { useSelector } from "react-redux";
import { WVList } from "virtua";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineGif } from "react-icons/ai";
import { BsEmojiFrown } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";

export default function Home() {
  const { accounts } = useSelector((state) => state.auth);
  const { currentAccount } = useSelector((state) => state.auth);
  const [isInputFocusedTop, setInputFocusedTop] = useState(false);
  const [isInputFocusedBot, setInputFocusedBot] = useState(false);
  const senbBtn = useRef();
  const textarea = useRef();

  return (
    <>
      <div className="">
        <WhereIsThis text="Anasayfa" />
        <PostChoice />
      </div>
      <div>
        <div className=" flex justify-start items-start ml-2 mt-1">
          <div className="flex justify-start items-start w-10 h-10 mt-2 ml-1">
            <img
              src={currentAccount.avatar}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full ">
            {isInputFocusedTop && (
              <button
                type=""
                className="rounded-xl border-white border-opacity-20 border-2 text-blue-500 h-7 w-14 text-xs ml-2 mt-2 p-1"
              >
                Herkes
              </button>
            )}
            <textarea
              onFocus={() => {
                setInputFocusedTop(true);
                setInputFocusedBot(true);
              }}
              onBlur={() => {
                setInputFocusedTop(false);
                setInputFocusedBot(false);
              }}
              ref={textarea}
              className="bg-black p-4 text-white placeholder-white placeholder-opacity-50 h-16 focus-within:outline-none resize-none"
              placeholder="Neler oluyor?"
            />
            {isInputFocusedBot && (
              <div className="w-11/12 border  border-white border-opacity-50 mb-4 mt-3 " />
            )}
            <div className="flex flex-row justify-between items-center mb-1 ">
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
          </div>
        </div>
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
