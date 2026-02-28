import { useEffect, useRef, useState } from 'react'

import { demoSources } from '../../content/siteContent'

export function EmulatorShowcase() {
  const emulatorRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeTimeoutRef = useRef<number | null>(null)

  const videoDemoId = demoSources.find((demo) => demo.type === 'video')?.id ?? demoSources[0]?.id ?? 'video'
  const [activeDemoId, setActiveDemoId] = useState(videoDemoId)

  const [hasVideo, setHasVideo] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeTimedOut, setIframeTimedOut] = useState(false)

  const activeDemo = demoSources.find((demo) => demo.id === activeDemoId) ?? demoSources[0]

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === emulatorRef.current)
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    if (!activeDemo || activeDemo.type !== 'iframe') {
      if (iframeTimeoutRef.current !== null) {
        window.clearTimeout(iframeTimeoutRef.current)
        iframeTimeoutRef.current = null
      }
      setIframeLoaded(false)
      setIframeTimedOut(false)
      return
    }

    setIframeLoaded(false)
    setIframeTimedOut(false)
    iframeTimeoutRef.current = window.setTimeout(() => {
      setIframeTimedOut(true)
    }, 4000)

    return () => {
      if (iframeTimeoutRef.current !== null) {
        window.clearTimeout(iframeTimeoutRef.current)
        iframeTimeoutRef.current = null
      }
    }
  }, [activeDemo])

  const handleSelectDemo = (demoId: string) => {
    if (demoId === activeDemoId) {
      return
    }

    const nextDemo = demoSources.find((demo) => demo.id === demoId)
    if (nextDemo?.type === 'video') {
      setHasVideo(true)
    }

    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause()
    }
    setIsPlaying(false)
    setActiveDemoId(demoId)
  }

  const handleTogglePlay = async () => {
    const video = videoRef.current
    if (!video || !hasVideo || activeDemo?.type !== 'video') {
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
    if (!video || !hasVideo || activeDemo?.type !== 'video') {
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

  const handleIframeLoad = () => {
    if (iframeTimeoutRef.current !== null) {
      window.clearTimeout(iframeTimeoutRef.current)
      iframeTimeoutRef.current = null
    }
    setIframeLoaded(true)
    setIframeTimedOut(false)
  }

  return (
    <section id="emulator" className="emulator-showcase" aria-label="Demo de aplicacion movil">
      <h2>Emulator Showcase</h2>
      <div className="demo-switcher" role="tablist" aria-label="Selector de demo">
        {demoSources.map((demo) => (
          <button
            key={demo.id}
            id={`demo-tab-${demo.id}`}
            type="button"
            role="tab"
            className="demo-tab"
            aria-selected={activeDemo?.id === demo.id}
            aria-controls={`demo-panel-${demo.id}`}
            onClick={() => handleSelectDemo(demo.id)}
          >
            {demo.label}
          </button>
        ))}
      </div>

      <div ref={emulatorRef} className="phone-frame">
        <div className="phone-screen">
          {activeDemo?.type === 'video' && hasVideo ? (
            <>
              <video
                ref={videoRef}
                className="phone-video"
                id={`demo-panel-${activeDemo.id}`}
                aria-labelledby={`demo-tab-${activeDemo.id}`}
                src={activeDemo.src}
                poster={activeDemo.poster}
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
          ) : activeDemo?.type === 'video' ? (
            <div className="video-missing" role="status" id={`demo-panel-${activeDemo.id}`} aria-labelledby={`demo-tab-${activeDemo.id}`}>
              <p>No se encontro el video de demo.</p>
              <p>
                Añadelo en <code>app/public/demo/app-demo.mp4</code>.
              </p>
            </div>
          ) : activeDemo?.type === 'iframe' && !iframeTimedOut ? (
            <>
              <iframe
                className="phone-iframe"
                id={`demo-panel-${activeDemo.id}`}
                aria-labelledby={`demo-tab-${activeDemo.id}`}
                src={activeDemo.src}
                title={activeDemo.label}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                onLoad={handleIframeLoad}
              />
              <p className="iframe-loading" role="status" aria-live="polite">
                {iframeLoaded ? 'Demo web cargada' : 'Cargando demo web...'}
              </p>
              <div className="emulator-controls emulator-controls-single" role="group" aria-label="Controles de la demo web">
                <button type="button" onClick={handleToggleFullscreen} aria-pressed={isFullscreen}>
                  {isFullscreen ? 'Salir fullscreen' : 'Fullscreen'}
                </button>
              </div>
            </>
          ) : (
            <div className="video-missing iframe-missing" role="status" id={`demo-panel-${activeDemo.id}`} aria-labelledby={`demo-tab-${activeDemo.id}`}>
              <p>No se pudo cargar la demo web.</p>
              <p>
                Comprueba la URL o politica de iframes del sitio remoto.
              </p>
              <button type="button" onClick={() => handleSelectDemo(videoDemoId)}>
                Volver a video
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
