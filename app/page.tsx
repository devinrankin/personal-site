"use client";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Timeline from "./components/timeline/timeline";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="flex flex-col items-center">
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <Timeline></Timeline>
      </main>
    </div>
  );
}
