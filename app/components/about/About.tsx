"use client";
import React from "react";
import Bold from "../bold";
import Card from "./card/Card";

type Props = {};

const createVariants = (
  xInitial: number,
  xChange: number,
  duration: number
) => {
  return {
    visible: {
      opacity: 1,
      x: xChange,
      transition: {
        duration: duration,
        delay: 0.2,
        type: "spring",
      },
    },
    hidden: {
      opacity: 0,
      x: xInitial,
    },
  };
};

export default function About({}: Props) {
  return (
    <section className="min-h-screen flex flex-col" id="about">
      <div className="px-5 py-16 sm:ml-60">
        <Card title="about me" variants={createVariants(240, 0, 1.5)}>
          <p className="pt-4 text-typography">
            in high school, i was introduced to computer science through game
            development, and i instantly fell in love. i enrolled into{" "}
            <Bold>temple university</Bold> majoring in computer science. there,
            my passion for computing grew.
          </p>
        </Card>
        <Card title="interests" variants={createVariants(-240, 0, 1.5)}>
          <p className="pt-4 text-typography">currently interested in</p>
          <ul className="list-disc pl-8 text-typography">
            <li>web development</li>
            <li>ui/ux design</li>
            <li>color theory</li>
            <li>typography</li>
            <li>computer networking</li>
            <li>machine learning</li>
          </ul>
        </Card>
        <Card title="hobbies" variants={createVariants(200, 0, 1.5)}>
          <ul className="list-disc pl-8 pt-4 text-typography">
            <li>video games</li>
            <li>learning chinese</li>
            <li>anime</li>
            <li>manga</li>
            <li>music</li>
            <li>cooking</li>
          </ul>
        </Card>
        <Card title="experience" variants={createVariants(-200, 0, 1.5)}>
          <ul className="list-disc pl-8 pt-4 text-typography">
            <li>
              <Bold>temple university</Bold>
              <ul className="list-disc pl-2 md:pl-8">
                <li>teaching assistant - introduction to java</li>
                <li>teaching assistant - low-level system programming</li>
                <li>computer science peer tutor</li>
              </ul>
            </li>
            <li>
              <Bold>coventry life settlements</Bold> - software engineer intern
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
