"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { navbarData } from "@/lib/data";
import { useTheme } from "next-themes";

type Props = {};

const navTheme = {
  name: "theme",
  route: "",
  path: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
  viewBox: "0 0 512 512",
};

const variants: Variants = {
  hover: {
    rotate: [0, 3, -3],
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 350,
      damping: 10,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Navbar({}: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav className="group fixed bg-primary border-bold-typography duration-[150ms] z-[1000] sm:top-0 sm:w-20 sm:h-screen sm:border-r-[2px] sm:border-t-0 sm:hover:w-64 bottom-0 w-screen h-20 border-t-[2px] ">
      <ul className="p-0 m-0 flex sm:flex-col items-center h-full list-none flex-row">
        <li className="text-3xl m-4 select-none whitespace-nowrap overflow-hidden tracking-widest sm:inline hidden text-typography">
          <h1 className="inline group-hover:hidden">dr</h1>
          <h1 className="hidden group-hover:inline">devin rankin</h1>
        </li>

        {Object.entries(navbarData).map(([key, value]) =>
          value.name === "theme" ? (
            <li key={key} className={"w-full mt-auto"}>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center h-20 no-underline text-typography duration-[600ms] hover:bg-secondary hover:text-bold-typography justify-center sm:justify-normal"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  role="img"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={value.viewBox}
                  className="min-w-[2rem] mx-6 my-0"
                >
                  <path
                    fill="currentColor"
                    d={value.path}
                    className="text-typography duration-[600ms]"
                  />
                </svg>
                <motion.span
                  className="hidden ml-4 overflow-hidden sm:group-hover:block whitespace-nowrap"
                  variants={variants}
                  whileHover="hover"
                >
                  {value.name}
                </motion.span>
              </button>
            </li>
          ) : (
            <li key={key} className={"w-full"}>
              <Link
                href={value.route}
                className="flex items-center h-20 no-underline text-typography duration-[600ms] hover:bg-secondary hover:text-bold-typography justify-center sm:justify-normal"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  role="img"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={value.viewBox}
                  className="min-w-[2rem] mx-6 my-0"
                >
                  <path
                    fill="currentColor"
                    d={value.path}
                    className="text-typography duration-[600ms]"
                  />
                </svg>
                <motion.span
                  className="hidden ml-4 overflow-hidden sm:group-hover:block whitespace-nowrap"
                  variants={variants}
                  whileHover="hover"
                >
                  {value.name}
                </motion.span>
              </Link>
            </li>
          )
        )}
      </ul>
    </motion.nav>
  );
}
