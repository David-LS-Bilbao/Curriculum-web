import { useEffect, useRef, useState } from 'react'

const DEMO_SRC = '/demo/app-demo.mp4'

export function EmulatorShowcase() {
  const emulatorRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [hasVideo, setHasVideo] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === emulatorRef.current)
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  const handleTogglePlay = async () => {
    const video = videoRef.current
    if (!video || !hasVideo) {
      return
    }

    if (video.paused) {
      try {
        await video.play()
      } catch {
        setIsPlaying(false)
      }
      return
    }

    video.pause()
  }

  const handleToggleMute = () => {
    const video = videoRef.current
    if (!video || !hasVideo) {
      return
    }

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleToggleFullscreen = async () => {
    const emulator = emulatorRef.current
    if (!emulator) {
      return
    }

    try {
      if (document.fullscreenElement === emulator) {
        await document.exitFullscreen()
      } else {
        await emulator.requestFullscreen()
      }
    } catch {
      setIsFullscreen(false)
    }
  }

  return (
    <section id="emulator" className="emulator-showcase" aria-label="Demo de aplicacion movil">
      <h2>Emulator Showcase</h2>

      <div ref={emulatorRef} className="phone-frame">
        <div className="phone-screen">
          {hasVideo ? (
            <>
              <video
                ref={videoRef}
                className="phone-video"
                src={DEMO_SRC}
                preload="metadata"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
                onError={() => setHasVideo(false)}
              >
                Tu navegador no soporta video HTML5.
              </video>

              <div className="emulator-controls" role="group" aria-label="Controles de la demo movil">
                <button type="button" onClick={handleTogglePlay} aria-pressed={isPlaying}>
                  {isPlaying ? 'Pausar' : 'Reproducir'}
                </button>
                <button type="button" onClick={handleToggleMute} aria-pressed={isMuted}>
                  {isMuted ? 'Activar sonido' : 'Silenciar'}
                </button>
                <button type="button" onClick={handleToggleFullscreen} aria-pressed={isFullscreen}>
                  {isFullscreen ? 'Salir fullscreen' : 'Fullscreen'}
                </button>
              </div>
            </>
          ) : (
            <div className="video-missing" role="status">
              <p>No se encontro el video de demo.</p>
              <p>
                Añadelo en <code>app/public/demo/app-demo.mp4</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
