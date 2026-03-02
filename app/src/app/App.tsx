import { useState } from 'react'

import { VideoEmulatorModal } from '../components/emulator/VideoEmulatorModal'
import { ContactSection } from '../components/sections/ContactSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { contact, heroCtas, profile, projects } from '../content/siteContent'
import { AppLayout } from './layout/AppLayout'

function App() {
  const [videoModalInstance, setVideoModalInstance] = useState(0)
  const [videoModal, setVideoModal] = useState<{ open: boolean; title: string; src: string }>({
    open: false,
    title: '',
    src: '',
  })

  const handleOpenVideo = (title: string, src: string) => {
    setVideoModalInstance((current) => current + 1)
    setVideoModal({ open: true, title, src })
  }

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, open: false }))
  }

  return (
    <>
      <AppLayout>
        <HeroSection profile={profile} ctas={heroCtas} />
        <ProjectsSection projects={projects} onOpenVideo={handleOpenVideo} />
        <ContactSection contact={contact} />
      </AppLayout>

      <VideoEmulatorModal
        key={videoModalInstance}
        open={videoModal.open}
        title={videoModal.title}
        src={videoModal.src}
        onClose={handleCloseVideo}
      />
    </>
  )
}

export default App
