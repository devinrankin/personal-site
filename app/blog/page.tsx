import React from "react";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-row items-center">
        <h1 className="text-typography text-3xl">Blog is currently a WIP. </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="text-typography pl-4 h-2/3"
        >
          <path
            fill="currentColor"
            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>
      </div>
      <Link href="/">
        <div className="rounded-xl bg-typography px-4 py-1 mt-4 cursor-pointer hover:scale-110">
          <p className="text-bold-typography">Back to main</p>
        </div>
      </Link>
    </main>
  );
}
