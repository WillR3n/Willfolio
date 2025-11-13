import './App.css'
import About from './pages/About'
import Contacts from './pages/Contact' 
import Projects from './pages/Projects'
import "aos/dist/aos.css";


function App() {
  return (
    <div className="bg-black text-white">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </div>
  )
}

export default App
