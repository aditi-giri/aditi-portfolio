import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Blogs from "../sections/Blogs"
import Contact from "../sections/Contact"

export default function Home(){

  return(

    <main>

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Blogs/>
      <Contact/>

    </main>

  )

}