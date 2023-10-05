"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { skillsData } from "@/lib/data";
import { motion, spring, stagger } from "framer-motion";

type Props = {};

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: [-2, 0],
    x: [-2, 0],
    transition: {
      duration: 0.4,
      staggerChildren: 0.04,
      type: "spring",
    },
  },
};

export default function Skills({}: Props) {
  return (
    <section className="flex flex-col items-center text-center text-typography">
      <SectionHeading>my skills</SectionHeading>
      <motion.ul
        className="flex flex-wrap justify-center gap-2 text-lg max-w-[53rem] mb-28"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="border border-white/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={variants}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
