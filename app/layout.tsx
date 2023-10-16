"use client";

import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
  title: "div",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.png" />
      </Head>
      <body className={ceraRound.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
