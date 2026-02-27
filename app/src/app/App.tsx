import { Section } from '../components/Section'
import { EmulatorShowcase } from '../components/emulator/EmulatorShowcase'
import { profile, sections } from '../content/siteContent'
import { AppLayout } from './layout/AppLayout'

function App() {
  const projectsSection = sections.find((section) => section.id === 'projects')

  return (
    <AppLayout>
      <header className="hero">
        <p className="eyebrow">Curriculum Web</p>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
      </header>

      <EmulatorShowcase />

      {projectsSection ? (
        <Section id={projectsSection.id} title={projectsSection.title}>
          <p>{projectsSection.summary}</p>
        </Section>
      ) : null}
    </AppLayout>
  )
}

export default App
