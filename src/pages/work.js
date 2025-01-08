export default function Projects() {
  return (
    <>
      <ModalProvider>
        <Nav />
        <main className="z-10 mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-32">
          {/* Section 1 */}
          <div className="col-span-6 md:col-span-2 flex h-auto flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl">
            <div className="flex justify-between">
              <FaPhoenixFramework className="text-3xl text-blue-200" />
            </div>
            <div className="h-72 w-72 animate-blob rounded-full bg-blue-900 opacity-8 mix-blend-normal blur-3xl shadow-lg shadow-blue-700/50 filter"></div>
            <div className="space-y-4">
              <div>
                <h1 className="text-xl text-blue-900 dark:text-blue-300">My Work</h1>
                <p className="pt-2 text-blue-600 text-sm dark:text-blue-300/80">
                  Check out what I&apos;ve been spending my time on.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="col-span-6 md:col-span-4 flex h-auto flex-col justify-between overflow-hidden rounded-2xl bg-blue-200 px-8 py-8 dark:border-blue-500 dark:bg-blue-900/20 dark:shadow-none dark:backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://cryptohack.org"
                  className="items-center flex justify-center text-2xl break-words"
                >
                  Applied Cryptography
                  <IoArrowRedoOutline className="pl-2 text-gray-500 hover:text-blue-100 transition duration-300" />
                </a>
                <h1 className="flex text-blue-200 text-md">Student</h1>
              </div>
              <p className="flex text-sm text-blue-300">OnGoing</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="col-span-6 md:col-span-3 flex h-auto flex-col justify-between rounded-2xl bg-zinc-900 px-8 py-8 overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="https://defcon9111.org/about"
                  className="items-center flex justify-center text-2xl break-words"
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
                <p className="pt-2 text-zinc-500 text-sm dark:text-zinc-300/80 break-words">
                  A local chapter of the famous DefCon Conference held in Las Vegas each year. We hosted the 0X06 DEFCON Event on December 16-17 at IIIT-D, which involved a number of workshops, talks by industry experts, CTF Contest, and loads of fun.
                </p>
              </div>
              <div>
                <div className="pl-4">
                  <ImageModal
                    src="/bloon.png"
                    alt="Bloon"
                    width={400}
                    height={450}
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

          {/* Embedded Instagram Posts */}
          <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <iframe
              src="https://www.instagram.com/p/C894OYotTtN/embed"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
              allowTransparency="true"
              frameBorder="0"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/C9KxfAqSoB3/embed"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
              allowTransparency="true"
              frameBorder="0"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/DApl2VyImHE/embed"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
              allowTransparency="true"
              frameBorder="0"
            ></iframe>
          </div>
        </main>
      </ModalProvider>
    </>
  );
}
