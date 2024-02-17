"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { navbarData } from "@/lib/data";
import { useTheme } from "next-themes";
import { scrollToSection } from "@/lib/sectionScrolling";

type Props = {};

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

        {Object.entries(navbarData).map(([key, value]) => (
          <li key={key} className={"w-full"}>
            <button
              className="flex items-center h-20 no-underline hover:text-bold-typography text-typography duration-[600ms] hover:bg-secondary justify-center sm:justify-normal w-full"
              onClick={() => scrollToSection(value.route)}
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
        ))}
      </ul>
    </motion.nav>
  );
}
