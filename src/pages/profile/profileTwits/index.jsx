import React, { useState } from "react";
import { useSelector } from "react-redux";
import TwitForm from "~/components/twitForm";

function ProfileTwits({ account }) {
  const [activeButton, setActiveButton] = useState("Button 1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div>
        <div className="w-full flex  border-b border-zinc-700">
          <button
            className={`w-1/5 p-3 hover:bg-zinc-700 hover:bg-opacity-50  ${
              activeButton === "Button 1"
                ? " text-white font-bold border-b-4 border-b-blue-500 "
                : "text-zinc-700"
            }`}
            onClick={() => handleButtonClick("Button 1")}
          >
            Gönderiler
          </button>
          <button
            className={`w-1/5 p-3 hover:bg-zinc-700 hover:bg-opacity-50 ${
              activeButton === "Button 2"
                ? " text-white font-bold border-b-4  border-b-blue-500 "
                : "text-zinc-700"
            }`}
            onClick={() => handleButtonClick("Button 2")}
          >
            Yanıtlar
          </button>
          <button
            className={`w-1/5 p-3 hover:bg-zinc-700 hover:bg-opacity-50 ${
              activeButton === "Button 3"
                ? " text-white font-bold border-b-4  border-b-blue-500 "
                : "text-zinc-700"
            }`}
            onClick={() => handleButtonClick("Button 3")}
          >
            Öne Çıkanlar
          </button>
          <button
            className={`w-1/5 p-3 hover:bg-zinc-700 hover:bg-opacity-50 ${
              activeButton === "Button 4"
                ? " text-white font-bold border-b-4  border-b-blue-500 "
                : "text-zinc-700"
            }`}
            onClick={() => handleButtonClick("Button 4")}
          >
            Medya
          </button>
          <button
            className={`w-1/5 p-3 hover:bg-zinc-700 hover:bg-opacity-50 ${
              activeButton === "Button 5"
                ? " text-white font-bold border-b-4 border-b-blue-500"
                : "text-zinc-700"
            }`}
            onClick={() => handleButtonClick("Button 5")}
          >
            Beğeni
          </button>
        </div>
        {account.info.tweets.map((twit, index) => (
          <TwitForm
            index={index}
            twit={twit}
            key={twit.id}
            ımage={account.avatar}
            fullName={account.fullName}
            username={account.username}
          />
        ))}
      </div>
    </>
  );
}

export default ProfileTwits;
