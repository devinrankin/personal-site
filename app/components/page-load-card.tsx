import React, { useEffect, useState } from "react";
import { getPageLoads, setPageLoads } from "./../../lib/countPageLoads";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function PageLoadCard({}: Props) {
  // increment the number of times the page has been loaded
  const [loaded, setLoaded] = useState<number>(0);

  useEffect(() => {
    let loaded = getPageLoads();
    setPageLoads(++loaded);
    setLoaded(loaded);
  }, [setLoaded]);

  const lastDigit = loaded % 10;
  let numEnder = "";

  if (lastDigit == 1 && loaded != 11) {
    numEnder = "st";
  } else if (lastDigit === 2 && loaded != 12) {
    numEnder = "nd";
  } else if (lastDigit === 3 && loaded != 13) {
    numEnder = "rd";
  } else {
    numEnder = "th";
  }

  const [removed, setRemoved] = useState(false);
  useEffect(() => {
    setTimeout(() => setRemoved(true), 15000);
  }, []);

  return (
    <AnimatePresence>
      {!removed && (
        <motion.div
          className="fixed top-0 right-0 bg-secondary z-50 rounded-xl w-96 cursor-pointer m-4"
          id="notif-card"
          onClick={() => setRemoved(true)}
          initial={{ x: "110%" }}
          animate={{
            x: "0",
            transition: { delay: 2 },
          }}
          whileTap={{ scale: 1.05 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-row items-center justify-center gap-4 p-4 pb-2 border-b border-typography shadow-lg">
            <Image
              src="/pfp.jpg"
              alt="pfp"
              width={45}
              height={45}
              className="rounded-full"
              objectFit="none"
              objectPosition="10"
            />
            <h3 className="opacity-80">@devinrankin</h3>
            <div className="opacity-60 text-sm font-bold ml-auto">now</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 h-5 opacity-60"
            >
              <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>
          <div className="p-4 text-sm">
            {loaded === 1 ? (
              <>
                hey{" "}
                <span className="underline text-bold-typography">
                  @lovely_person
                </span>
                ! thanks for visiting my page, use the navigation bar or scroll
                to learn more about me
              </>
            ) : loaded < 99 ? (
              <>
                hey{" "}
                <span className="underline text-bold-typography">
                  @lovely_person
                </span>
                {", "}
                thanks for visiting for the {loaded}
                {numEnder} time ^.^
              </>
            ) : (
              <>
                wow{" "}
                <span className="underline text-bold-typography">
                  @lovely_person
                </span>
                , you&apos;ve visited my page A LOT! don&apos;t you have
                anything better to do? jkjk
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
