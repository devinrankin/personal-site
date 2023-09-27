import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
          <Intro></Intro>
          <About></About>
          <Projects></Projects>
      </main>
    </div>
    
  )
}
