import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
          <Intro></Intro>
          <About></About>
      </main>
    </div>
    
  )
}
