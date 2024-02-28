"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/sectionScrolling";

type Props = {};

const dropIn = {
  hidden: {
    y: "-200vh",
  },
  visible: {
    y: "0vh",
    transition: {
      duration: 2,
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function Intro({}: Props) {
  return (
    <section
      className="h-screen m-0 flex flex-col items-center sm:items-start"
      id="home"
    >
      <motion.div
        className="flex flex-col w-full  mt-36 sm:m-60 sm:mb-44 sm:ml-0"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="w-full block text-[10vw] sm:text-[3.7vw] text-typography">
          <span className="block">
            hi, im{" "}
            <span className="font-black text-bold-typography">devin</span>.
          </span>
          <span className="block">
            a senior{" "}
            <span className="font-black text-bold-typography">
              computer science
            </span>{" "}
            major
          </span>
          <span className="block">
            at{" "}
            <span className="font-black text-bold-typography">
              temple university
            </span>
            .
          </span>
        </h1>

        <ul className="flex flex-row h-40 w-64 sm:w-96 sm:h-12 flex-wrap content-start">
          <li className="text-typography no-underline m-2 h-8 duration-[200ms] ease-in-out hover:scale-110">
            <Link href="https://github.com/devinrankin" target="_blank">
              <svg
                className="min-w-[2rem]"
                aria-hidden="true"
                focusable="false"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </Link>
          </li>
          <li className="text-typography no-underline m-2 h-8 duration-[200ms] ease-in-out hover:scale-110">
            <Link
              href="https://www.linkedin.com/in/devin-rankin-1b5394207/"
              target="_blank"
            >
              <svg
                className="min-w-[2rem]"
                aria-hidden="true"
                focusable="false"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </Link>
          </li>
          <li className="text-typography no-underline m-2 h-8 duration-[200ms] ease-in-out hover:scale-110">
            <Link
              href="https://discord.com/users/295721632079675392"
              target="_blank"
            >
              <svg
                className="min-w-[2rem]"
                aria-hidden="true"
                focusable="false"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                />
              </svg>
            </Link>
          </li>
          <li className="text-typography no-underline m-2 h-8 duration-[200ms] ease-in-out hover:scale-110">
            <Link href="mailto:devinrankin@temple.edu" target="_blank">
              <svg
                className="min-w-[2rem]"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </Link>
          </li>
          <li className="text-typography no-underline m-2 h-8 duration-[200ms] ease-in-out hover:scale-110">
            <Link href="tel:(412)-660-1608">
              <svg
                className="min-w-[2rem]"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </Link>
          </li>
          <li className="text-typography no-underline m-2 h-8 duration-[200ms] ease-in-out hover:scale-110 ">
            <Link
              href="/resume_devinrankin_2023_09_28.pdf"
              download
              className="bg-typography text-primary rounded-full py-1 px-3 display flex items-center transition"
              target="_blank"
            >
              download resume
              <svg
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
            </Link>
          </li>
        </ul>
        <SpotifyWidget></SpotifyWidget>
      </motion.div>
      <motion.div
        className="w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        onClick={() => scrollToSection("about")}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-7 h-9 cursor-pointer text-typography"
          animate={{
            y: [0, 10, 0],
            transition: { ease: "linear", repeat: Infinity, duration: 1 },
          }}
        >
          <path
            fill="currentColor"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
