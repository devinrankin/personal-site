import React from "react";
import type { timelineElement } from "@/lib/data";
import Link from "next/link";

type Props = {
  data: timelineElement;
};

export default function TimelineItem({ data }: Props) {
  let href = "";
  if (data.link !== "none") href = data.link;
  return (
    <div className="mt-8 flex flex-col justify-center">
      <div className="rounded-full bg-primary w-4 h-4 -ml-2 border-2 absolute border-bold-typography"></div>
      <div className="flex flex-col items-start text-start w-2/3 ml-10 bg-secondary rounded-xl duration-[200ms] hover:scale-105 ease-in-out">
        <Link href={href} target="_blank" className="px-8 py-4 w-full">
          <div className="flex flex-row w-full sm:last:ml-auto">
            <p className="inline text-typography opacity-70 text-sm">
              {data.date}
            </p>
            <div className="inline bg-typography text-bold-typography p-1 rounded-xl ml-auto text-sm">
              {data.tag}
            </div>
          </div>
          <h3 className="text-typography text-lg">{data.title}</h3>
          <ul className="list-disc text-typography opacity-90 text-sm ml-4">
            {data.content.map((subcontent, index) => (
              <li className="" key={index}>
                {subcontent}
              </li>
            ))}
          </ul>
        </Link>
      </div>
    </div>
  );
}
