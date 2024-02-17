"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { timelineData } from "@/lib/data";
import TimelineItem from "./timeline_item";
import { motion } from "framer-motion";
import Link from "next/link";
import Note from "./note";

type Props = {};

const timelineVariants = {
  hidden: {
    x: "50vw",
    opacity: 0,
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

export default function Timeline({}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col text-center first:items-center mb-28"
      id="timeline"
    >
      <SectionHeading>timeline</SectionHeading>
      <Note />
      {/* Timeline bar */}
      <div className="border-l border-typography">
        <motion.ul
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineData.map((data, index) => (
            <motion.li variants={timelineVariants} key={index} className="">
              <TimelineItem data={data} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* Timeline bar */}
    </motion.section>
  );
}
