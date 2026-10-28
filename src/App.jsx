import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Recognition from './sections/Recognition'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />


        <About />
              <Skills />
              <Projects/>
              <Experience />
              <Recognition />
              <Contact />
              <Footer/>
      </main>

    </>
  )
}

export default App