import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Subscribe() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="bg-zinc-900 bg-opacity-85 rounded-2xl mt-3">
        <div className="p-4 -ml-1 ">
          <div>
            <div className=" text-xl font-bold ">Premium'a Abone Ol</div>
          </div>
          <div>
            <div className="text-md font-semibold pt-1 ">
              Yeni özellikleri açmak için abone ol ve uygun olman durumunda
              reklam geliri payı kazan.
            </div>
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-bold text-white  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                          className="text-2xl font-bold leading-10 text-white justify-center text-center pt-4"
                        >
                          Hesabının türü hangisi?
                        </Dialog.Title>
                        <div className="justify-center text-center p-4">
                          <div className="mt-2 p-4">
                            <p className="text-sm text-white justify-center text-center">
                              Sana uygun doğru aboneliği seç:
                            </p>
                          </div>

                          <div className=" flex justify-around p-4">
                            <button
                              type="button"
                              className="justify-center items-center
                              bg-black m-2 py-6 px-2 text-sm font-medium text-white hover:bg-gray-800  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 border border-blue-500 rounded-lg w-1/2"
                              onClick={closeModal}
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
                              className="inline-flex justify-center rounded-lg
                             border border-transparent bg-black m-2 py-6 px-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-1/2"
                              onClick={closeModal}
                            >
                              <div className="text-gray-400 justify-start text-left">
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
                            <button className="text-black bg-white w-full rounded-full p-4 font-bold hover:bg-gray-200">
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
