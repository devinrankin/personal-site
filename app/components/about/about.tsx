"use client";
import React from "react";
import Bold from "../bold";
import Card from "./card/Card";
import { interestsData, hobbiesData } from "@/lib/data";

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
    <section
      className="min-h-screen flex flex-col items-center mb-28"
      id="about"
    >
      <Card title="about me" variants={createVariants(240, 0, 1.5)}>
        <p className="pt-4 text-typography">
          in high school, i was introduced to computer science through game
          development, and i instantly fell in love. i enrolled into{" "}
          <Bold>temple university</Bold> majoring in computer science. there, my
          passion for computing grew.
        </p>
      </Card>
      <Card title="interests" variants={createVariants(-240, 0, 1.5)}>
        <p className="pt-4 text-typography">currently interested in</p>
        <ul className="list-disc pl-8 text-typography">
          {interestsData.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </Card>
      <Card title="hobbies" variants={createVariants(200, 0, 1.5)}>
        <ul className="list-disc pl-8 pt-4 text-typography">
          {hobbiesData.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
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
    </section>
  );
}
