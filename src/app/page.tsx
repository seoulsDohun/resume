import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import OtherExperiences from './components/OtherExperiences'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main>
      <About />
      <Experience />
      <OtherExperiences />
      <Skills />
      <Contact />
    </main>
  )
}
