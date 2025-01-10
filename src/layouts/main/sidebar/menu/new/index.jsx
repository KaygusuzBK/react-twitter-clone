import Button from "~/components/button";
import { Fragment, useEffect, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { GoFileMedia, GoGift } from "react-icons/go";
import { useSelector } from "react-redux";
import { BsEmojiFrown } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import classNames from "classnames";
import axios from "axios";

export default function New() {
  let [isOpen, setIsOpen] = useState(false);
  const { account } = useSelector((state) => state.auth);
  const textarea = useRef();
  const senbBtn = useRef();

  const [newTweet, setNewTweet] = useState({
    like: 0,
    retweet: 0,
    comment: 0,
    reply: [],
  });

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const btnOnclick = () => {
    if (textarea.current?.value.length > 0) {
      setNewTweet({
        ...newTweet,
        tweet: textarea.current?.value,
        date: new Date().toLocaleDateString(),
      });
      closeModal();
    }
  };

  return (
    <>
      <div className="py-4 w-[90%]">
        <Button type="button" onClick={openModal} size="large">
          Gönder
        </Button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={closeModal}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center pt-14 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-3xl bg-black px-5 py-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title>
                    <div className="flex flex-row justify-between items-center mb-4 -m-2 p-2">
                      <button onClick={closeModal}>
                        <FaTimes className="text-white rounded-full hover:bg-zinc-500 hover:bg-opacity-50 p-1 w-6 h-6" />
                      </button>
                      <button className="text-blue-500 font-bold hover:bg-blue-500 hover:bg-opacity-20 rounded-full p-2">
                        Tasklaklar
                      </button>
                    </div>
                  </Dialog.Title>
                  {/* MERKEZ */}
                  <div className="flex  mt-5">
                    <img
                      src={account.avatar}
                      className="w-10 h-10 rounded-full m-1"
                    />
                    <textarea
                      ref={textarea}
                      className="  rounded-lg w-full h-40 bg-black text-white placeholder-zinc-400 placeholder-opacity-40 p-2 m-1 -mr-2 focus:outline-none resize-none"
                      placeholder="Ay noluyo noluyo?"
                    />
                  </div>
                  <hr className="border-zinc-300 border-opacity-20 mt-5 -ml5 mr-5"></hr>
                  {/* ALT PANEL */}
                  <div className="flex flex-row justify-between items-center mt-3">
                    <div className="flex flex-row justify-between items-center">
                      <GoFileMedia className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                      <AiOutlineGif className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                      <BsEmojiFrown className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                      <GoFileMedia className="text-blue-500 rounded-lg h-8 w-8 hover:bg-blue-500 hover:bg-opacity-20 p-2 " />
                    </div>
                    <div className="flex flex-row justify-end items-center">
                      <button
                        ref={senbBtn}
                        onClick={btnOnclick}
                        className="bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold py-2 px-4"
                      >
                        Gönder
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
