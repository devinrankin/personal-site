import React from "react";
import type { timelineElement } from "@/lib/data";
import Link from "next/link";

type Props = {
  data: timelineElement;
};

export default function TimelineItem({ data }: Props) {
  let href = "";
  let target = "";
  if (data.link !== undefined) {
    href = data.link;
    target = "_blank";
  }
  return (
    <div className="mt-8 flex flex-col justify-center select-none">
      <div className="rounded-full bg-primary w-4 h-4 -ml-2 border-2 absolute border-bold-typography"></div>
      <div className="flex flex-col items-start pl-8 pb-4 text-start w-2/3 ml-10 bg-secondary rounded-xl duration-[200ms] hover:scale-105 ease-in-out">
        <div className="flex flex-row w-full  sm:last:ml-auto">
          <p className="inline text-typography opacity-70 text-sm capitalize mt-4">
            {data.date}
          </p>
          <div className="inline bg-typography text-bold-typography p-1 rounded-bl-xl rounded-tr-xl ml-auto text-sm h-1/2">
            {data.tag}
          </div>
        </div>
        <h3 className="text-typography text-lg">{data.title}</h3>
        <ul className="list-disc text-typography opacity-90 text-sm ml-4">
          {data.content &&
            data.content.map((subcontent, index) => (
              <li className="" key={index}>
                {subcontent}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
