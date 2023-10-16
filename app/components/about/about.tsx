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
    <section className="flex flex-col items-center mb-28" id="about">
      <Card title="about me" variants={createVariants(240, 0, 1.5)}>
        <p className="pt-4 text-typography">
          In high school, I was introduced to computer science through game
          development, and I instantly fell in love. I enrolled into{" "}
          <Bold>Temple University</Bold> majoring in computer science. There, my
          passion for computing grew.
        </p>
      </Card>
      <Card title="interests" variants={createVariants(-240, 0, 1.5)}>
        <p className="pt-4 text-typography">Currently interested in</p>
        <ul className="list-disc pl-8 text-typography capitalize">
          {interestsData.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </Card>
      <Card title="hobbies" variants={createVariants(200, 0, 1.5)}>
        <ul className="list-disc pl-8 pt-4 text-typography capitalize">
          {hobbiesData.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
