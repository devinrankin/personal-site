import Navbar from "@/components/Navbar/Navbar"
import Intro from "@/components/Intro"
import About from "@/components/about/About"

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
