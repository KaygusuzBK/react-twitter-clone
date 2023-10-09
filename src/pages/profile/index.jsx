import classNames from "classnames";
import { FaArrowLeft, FaThumbtack } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsBalloon, BsCalendar, BsCalendar2, BsCalendar2Check, BsCalendar2Date, BsCalendarPlus } from "react-icons/bs";

export default function Profile() {
  const { slug } = useParams();

  const { currentAccount } = useSelector((state) => state.auth);

  return (
    <>
      <div className="flex justify-start items-center">
        <div className="flex justify-center items-center">
          <NavLink to="/">
            <FaArrowLeft className="text-white text-md rounded-full border border-black m-3 w-10 h-10 hover:bg-gray-700 hover:bg-opacity-80 p-3" />
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <p className="text-lg font-bold">{slug}</p>
          <small className="font-light text-sm text-white text-opacity-50">
            31 gönderi
          </small>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={currentAccount.backgroundImage}
          alt="profileBackground"
          onClick={() => {}}
          className={classNames("w-full h-48 object-cover rounded-sm", {
            "cursor-pointer": true,
          })}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-5">
          <img
            src={currentAccount.avatar}
            alt="profile"
            className="w-36 h-36 object-cover rounded-full border-2 border-black -mt-14"
          />
        </div>
        <div className="mr-6 -mt-1">
          <button className="bg-black text-white text-md border  font-bold py-1 px-2 rounded-full">
            Profili düzenle
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-start items-center">
          <div className="flex flex-col mt-3 ml-4">
            <p className="text-lg font-bold">{slug}</p>
            <p className="text-sm font-thin text-white text-opacity-50">
              {currentAccount.username}
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 ml-2">
          <p className="text-sm font-light text-white ">
            {currentAccount.info.bio}
          </p>
        </div>
        <div className="flex justify-start items-center m-2 ml-3">
          <div className="flex justify-start items-center">
            <BsBalloon className="text-white text-opacity-50" />
            <p className="text-sm font-light text-white text-opacity-50 ml-1">
              Doğum Tarihi: {currentAccount.info.birthday}
            </p>
          </div>
          <div className="flex justify-start items-center ml-4">
            <BsCalendar2Date className="text-white text-opacity-50" />
            <p className="text-sm font-light text-white text-opacity-50 ml-2">
              {currentAccount.info.createdAt} tarihinde katıldı
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center ml-3">
          <p className="text-sm font-light text-white hover:underline">
            {currentAccount.info.followers} takipçi
          </p>
          <p className="text-sm font-light text-white ml-3 hover:underline">
            {currentAccount.info.following} takip edilen
          </p>
        </div>
      </div>
    </>
  );
}
