"use client";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import useMenu from "@/hooks/use-menu";
import MobilMenuContent from "@/components/mobil-menu/mobil-menu-content";

const MobilMenu = () => {
  const { isOpen, onClose } = useMenu();
  const cancelButtonRef = useRef(null);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' aria-hidden='true' />
        </Transition.Child>
        <div className='fixed inset-0 z-40'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 -translate-x-16'
            enterTo='opacity-100 translate-x-0'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-x-0'
            leaveTo='opacity-0 -translate-x-16'
          >
            <Dialog.Panel className='relative h-full flex w-full max-w-80 flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
              <MobilMenuContent onClose={onClose} />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobilMenu;
