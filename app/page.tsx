"use client";
import Navbar from "./_components/Navbar/Navbar";
import Intro from "./_components/Home/Home";
import About from "./_components/About/About";
import Skills from "./_components/Skills/Skills";
import Projects from "./_components/Projects/Projects";
import Timeline from "./_components/Timeline/Timeline";
import PageLoadCard from "./_components/PageLoadToast";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-center">
        <PageLoadCard />
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <Timeline></Timeline>
        <Projects></Projects>
      </main>
    </>
  );
}
