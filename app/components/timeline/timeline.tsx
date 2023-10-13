"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { timelineData } from "@/lib/data";
import TimelineItem from "./timeline_item";
import { motion } from "framer-motion";

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
      className="flex flex-col text-center mb-28"
      id="timeline"
    >
      <SectionHeading>timeline</SectionHeading>
      <div className="border-l border-typography">
        <motion.ul
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineData.map((data, index) => (
            <motion.li variants={timelineVariants} key={index}>
              <TimelineItem data={data}></TimelineItem>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
