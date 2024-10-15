import { Divider } from '@mui/material'
import About from './components/About'
import Experience from './components/Experience'
import OtherExperiences from './components/OtherExperiences'

export default function Home() {
  return (
    <main>
      <About />
      <Experience />
      <OtherExperiences />
    </main>
  )
}
