import React, { HTMLAttributes, ReactNode } from "react";
import { Variants, motion } from "framer-motion";

type Props = {
  title: string;
  children: ReactNode;
  variants: Variants;
};

export default function Card({ title, children, variants }: Props) {
  return (
    <motion.div
      className="rounded-xl shadow-2xl flex flex-col bg-secondary text-bold-typography text-xl px-8 py-4 leading-8 mt-12 max-w-[45rem] md:ml-32 md:w-1/2"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="text-2xl pt-4 text-bold-typography font-black">{title}</h1>
      <div className="text-typography text-xl mb-4">{children}</div>
    </motion.div>
  );
}
