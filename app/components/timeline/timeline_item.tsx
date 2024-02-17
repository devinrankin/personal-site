import React from "react";
import type { timelineElement } from "@/lib/data";
import Link from "next/link";

type Props = {
  data: timelineElement;
};

export default function TimelineItem({ data }: Props) {
  return data.link ? (
    <div className="flex flex-col justify-center select-none mt-8">
      <div className="rounded-full bg-typography w-4 h-4 -ml-2 border-2 absolute border-bold-typography" />
      <Link
        className="flex flex-col items-start text-start ml-10 bg-secondary rounded-xl duration-[200ms] hover:scale-105 ease-in-out pl-6 pb-6 shadow-lg"
        href={data.link}
      >
        <div className="flex flex-row w-full">
          <div className="capitalize text-sm opacity-70 inline mt-4 text-typography">
            {data.date}
          </div>
          <div className="h-2/3 inline ml-auto rounded-bl-xl rounded-tr-xl bg-bold-typography text-sm px-1 py-[3px]">
            {data.tag}
          </div>
        </div>
        <div className="pr-6 text-typography">
          <h3>{data.title}</h3>
          <ul className="list-disc text-typography opacity-90 text-sm ml-4">
            {data.content &&
              data.content.map((content, index) => (
                <li className="" key={index}>
                  {content}
                </li>
              ))}
          </ul>
        </div>
      </Link>
    </div>
  ) : (
    <div className="flex flex-col justify-center select-none mt-8">
      <div className="rounded-full bg-primary w-4 h-4 -ml-2 border-2 absolute border-bold-typography" />
      <div className="flex flex-col items-start text-start ml-10 bg-secondary rounded-xl duration-[200ms] ease-in-out pl-6 pb-6 shadow-lg">
        <div className="flex flex-row w-full">
          <div className="capitalize text-sm opacity-70 inline mt-4 text-typography">
            {data.date}
          </div>
          <div className="h-2/3 inline ml-auto rounded-bl-xl rounded-tr-xl bg-bold-typography text-sm px-1 py-[3px]">
            {data.tag}
          </div>
        </div>
        <div className="pr-6 text-typography">
          <h3>{data.title}</h3>
          <ul className="list-disc text-typography opacity-90 text-sm ml-4">
            {data.content &&
              data.content.map((content, index) => (
                <li className="" key={index}>
                  {content}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
