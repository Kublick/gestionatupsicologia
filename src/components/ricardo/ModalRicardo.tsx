import { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import Confetti from "react-confetti";
import FormularioRicardo from "./FormularioRicardo";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const FormularioModalRicardo: FC<Props> = ({ isOpen, setIsOpen }) => {
  const [party, setParty] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title>
                    <p className="text-2xl font-semibold text-center">
                      Registrate al webinar
                    </p>
                  </Dialog.Title>
                  <Confetti
                    numberOfPieces={party ? 300 : 0}
                    width={450}
                    height={400}
                  />

                  <FormularioRicardo
                    closeModal={closeModal}
                    setParty={setParty}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FormularioModalRicardo;
