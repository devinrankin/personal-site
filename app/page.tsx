import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Projects from "./components/projects/projects"
import Skills from "./components/skills/skills"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
          <Intro></Intro>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
      </main>
    </div>
    
  )
}
