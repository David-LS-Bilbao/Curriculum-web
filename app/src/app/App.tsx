import { EmulatorShowcase } from '../components/emulator/EmulatorShowcase'
import { ContactSection } from '../components/sections/ContactSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { contact, heroCtas, profile, projects } from '../content/siteContent'
import { AppLayout } from './layout/AppLayout'

function App() {
  return (
    <AppLayout>
      <HeroSection profile={profile} ctas={heroCtas} />
      <EmulatorShowcase />
      <ProjectsSection projects={projects} />
      <ContactSection contact={contact} />
    </AppLayout>
  )
}

export default App
