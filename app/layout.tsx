import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";

const ceraRound = localFont({
  src: [
    {
      path: "../public/font/CeraRoundPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/CeraRoundPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/CeraRoundPro-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Devin Rankin",
  description:
    "Hi, I'm Devin (or div), a computer science major at Temple University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ceraRound.className}>{children}</body>
    </html>
  );
}
