import Link from "next/link";
import Nav from "../components/nav";
import { FaPhoenixFramework } from "react-icons/fa";
import Image from "next/image";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowRedoOutline } from "react-icons/io5";
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <Modal isOpen={!!modalContent} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

const ImageModal = ({ src, alt, modalContent, width, height }) => {
  const { openModal } = useModal();

  return (
    <div onClick={() => openModal(modalContent)}>
      <Image
        className="rounded-md cursor-zoom-in hover:shadow-lg transition duration-300 opacity-70 hover:opacity-100"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ModalProvider>
        <Nav />
        <main className="z-10 mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-32">
          <div className="col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-2">
            <div className="flex justify-between">
              <FaPhoenixFramework className="text-3xl text-blue-200" />
            </div>
            <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>

            <div className="space-y-4">
              <div>
                <h1 className="text-xl text-blue-900 dark:text-blue-300 dark:text-glow-blue-500/50">
                  My Work
                </h1>

                <p className="pt-2 text-blue-600 text-sm dark:text-blue-300/80 dark:text-glow-blue-500/50">
                  Check out what I&apos;ve been spending my time on.
                </p>
              </div>
            </div>
          </div>
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="064a99a1-5475-48f5-8876-f980ae409bca" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6756315a-5d24-4a18-afc1-f64fafc2faff" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="70007123-c9f5-4dc4-a443-9b4890443470" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="129bb4cd-59b4-4dc5-90e3-54e5431d57a5" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ea11c559-94b9-4083-a05c-ef846fff9f18" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6de5162f-20bd-4543-af1d-3d9afe5c07b8" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          <div className="col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-4">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://cryptohack.org"
                  className="items-center flex justify-center text-2xl"
                >
                  Applied Cryptography{" "}
                  <IoArrowRedoOutline className="pl-2 text-gray-500 hover:text-blue-100 transition duration-300" />
                </a>
                <h1 className="flex text-blue-200 text-md">Student</h1>
              </div>
              <p className="flex text-sm text-blue-300">OnGoing</p>
            </div>
            <div class=" h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>

            <div className="flex items-center space-between">
              <div>
                <p className="pt-2 text-blue-600 text-sm dark:text-blue-300/80 dark:text-glow-blue-500/50">
                  
                </p>
              </div>
              <div>
                <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="md:col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex h-52 flex-col justify-between rounded-2xl bg-zinc-900 px-8 py-8 md:col-span-3">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://defcon9111.org/about"
                  className="items-center flex justify-center text-2xl"
                >
                  Defcon Delhi
                  <IoArrowRedoOutline className="pl-2 text-gray-500 hover:text-blue-100 transition duration-300" />
                </a>
                <h1 className="flex text-zinc-200 text-md">Team Member</h1>
              </div>
              <p className="flex text-sm text-slate-300">Sep 2023 - Curr.</p>
            </div>

            <div className="flex items-center space-between">
              <div>
                <p className="pt-2 text-zinc-500 text-sm dark:text-zinc-300/80 dark:text-glow-zinc-500/50">
                  A local chapter of the famous DefCon Conference held in 
                    Las Vegas each year. We hosted the 0X06 DEFCON Event 
                    on December 16-17 at IIIT-D, which involved a number of 
                      workshops, talks by industry experts, CTF Contest, and 
                        loads of funs.
                </p>
              </div>
              <div>
                <div className="pl-4">
                  <ImageModal
                    src="/bloon.png"
                    alt="Bloon"
                    width={400}
                    height={300}
                    modalContent={
                      <>
                        <Image
                          src="/bloon.png"
                          alt="Enlarged Bloon"
                          className="rounded-lg"
                          width={600}
                          height={400}
                        />
                        <p className="text-placeholder pt-2">
                            Web3 - Crypto - NFT
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
</main>
</ModalProvider>
</>
);
}
