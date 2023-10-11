import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
      </main>
    </div>
  );
}
