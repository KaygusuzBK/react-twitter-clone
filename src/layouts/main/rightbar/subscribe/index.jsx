import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useState } from "react";

function Subscribe() {
  let [isOpen, setIsOpen] = useState(false);
  const [button1Active, setButton1Active] = useState(false);
  const [button2Active, setButton2Active] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    if (activeButton === buttonNumber) {
      // Eğer tıklanan buton zaten aktifse, pasif hale getir
      setActiveButton(null);
    } else {
      // Değilse, tıklanan butonu aktif yap
      setActiveButton(buttonNumber);
    }
  };
  return (
    <>
      <div className="bg-zinc-900 bg-opacity-85 rounded-xl">
        <div className="p-4  ">
          <div>
            <div className=" text-lg font-extrabold text-white">
              Premium'a Abone Ol
            </div>
          </div>
          <div>
            <div className="text-md font-semibold pt-1 ">
              Yeni özellikleri açmak için abone ol ve uygun olman durumunda
              reklam geliri payı kazan.
            </div>
          </div>
          <div className="pt-4 -mt-2 -ml-1">
            <button
              type="button"
              onClick={openModal}
              className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-bold text-white  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 antialiased"
            >
              Abone Ol
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-3xl font-bold leading-10 text-white justify-center text-center pt-4 mx-4"
                        >
                          Hesabının türü hangisi?
                        </Dialog.Title>
                        <div className="justify-center text-center p-4">
                          <div className="mt-2 p-4 m-4">
                            <p className="text-sm text-white justify-center text-center">
                              Sana uygun doğru aboneliği seç:
                            </p>
                          </div>

                          <div className=" flex justify-center items-center ">
                            <button
                              type="button"
                              onClick={() => handleButtonClick(1)}
                              className={classNames(
                                activeButton === 1
                                  ? " m-1 rounded-xl bg-black pt-4  hover:bg-gray-700 px-7 py-7"
                                  : " m-1 rounded-xl bg-black pt-4  hover:bg-gray-500 px-7 py-7",
                                {
                                  "border border-white bg-gray-950 bg-opacity-75":
                                    activeButton === 1,
                                }
                              )}
                            >
                              <div className="text-gray-400 justify-start text-left">
                                <small>Premium</small>
                                <p className="text-white">Bireyim</p>
                                <small>
                                  Bireyler ve içerik üreticileri için
                                </small>
                              </div>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleButtonClick(2)}
                              className={classNames(
                                activeButton === 2
                                  ? "p-2 m-1 rounded-xl bg-black pt-4  hover:bg-gray-700 px-7 py-7 "
                                  : "p-2 m-1 rounded-xl bg-black pt-4  hover:bg-gray-700 px-7 py-7",
                                {
                                  "border border-white ": activeButton === 2,
                                }
                              )}
                            >
                              <div className="text-gray-400 justify-center text-left">
                                <small>Onaylı Kuruluşlar</small>
                                <p className="text-white">Kuruluşum</p>
                                <small>
                                  İşletmeler, devlet kurumları, kar amacı
                                  gütmeyen kuruluşlar için
                                </small>
                              </div>
                            </button>
                          </div>
                          <div className="mt-4">
                            <button
                              className="text-black bg-white w-full rounded-full p-4 font-bold hover:bg-gray-200"
                              onClick={closeModal}
                            >
                              Abone ol
                            </button>
                          </div>
                          <div className="mt-4">
                            <p>
                              Daha fazla bilgi al:{" "}
                              <a
                                href="https://help.twitter.com/tr/using-x/x-premium"
                                target="_blank"
                                className="text-blue-500"
                              >
                                Premium
                              </a>{" "}
                              ve{" "}
                              <a
                                href="https://help.twitter.com/tr/using-x/verified-organizations"
                                target="_blank"
                                className="text-blue-500"
                              >
                                Onaylı Kuruluşlar
                              </a>
                            </p>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
