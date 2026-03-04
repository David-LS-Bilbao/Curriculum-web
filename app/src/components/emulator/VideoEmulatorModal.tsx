import { useEffect, useId, useRef, useState } from 'react'
import { resolveAssetPath } from '../../utils/assetPath'

type VideoEmulatorModalProps = {
  open: boolean
  title: string
  src: string
  poster?: string
  onClose: () => void
  zoom?: number
}

export function VideoEmulatorModal({ open, title, src, poster, onClose, zoom = 1.06 }: VideoEmulatorModalProps) {
  const phoneFrameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const headingId = useId()

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [hasVideo, setHasVideo] = useState(true)
  const resolvedSrc = resolveAssetPath(src)
  const resolvedPoster = poster ? resolveAssetPath(poster) : undefined

  const lastFocusedElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (open) {
      lastFocusedElement.current = document.activeElement as HTMLElement
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()

      return () => {
        document.body.style.overflow = previousOverflow
        lastFocusedElement.current?.focus()
      }
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'Tab' && phoneFrameRef.current) {
        const focusableElements = phoneFrameRef.current.parentElement?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusableElements) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            event.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            event.preventDefault()
          }
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === phoneFrameRef.current)
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

  const handleStop = () => {
    const video = videoRef.current
    if (!video || !hasVideo) {
      return
    }

    video.pause()
    video.currentTime = 0
    setIsPlaying(false)
  }

  const handleVolumeChange = (nextVolume: number) => {
    const video = videoRef.current
    if (!video || !hasVideo) {
      return
    }

    const normalized = Math.min(100, Math.max(0, nextVolume))
    video.volume = normalized / 100
    if (normalized > 0 && video.muted) {
      video.muted = false
    }
    if (normalized === 0 && !video.muted) {
      video.muted = true
    }
    setVolume(normalized)
    setIsMuted(video.muted)
  }

  const handleToggleFullscreen = async () => {
    const frame = phoneFrameRef.current
    if (!frame) {
      return
    }

    try {
      if (document.fullscreenElement === frame) {
        await document.exitFullscreen()
      } else {
        await frame.requestFullscreen()
      }
    } catch {
      setIsFullscreen(false)
    }
  }

  if (!open) {
    return null
  }

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div
        className="video-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="video-modal-header">
          <h2 id={headingId}>{title} · Video</h2>
          <button ref={closeButtonRef} type="button" className="video-modal-close" onClick={onClose} aria-label="Cerrar modal">
            X
          </button>
        </div>

        <div ref={phoneFrameRef} className="phone-frame video-modal-phone-frame">
          <div className="phone-notch" />
          <div className="phone-screen">
            {hasVideo ? (
              <>
                <video
                  ref={videoRef}
                  className="phone-video video-modal-player"
                  src={resolvedSrc}
                  poster={resolvedPoster}
                  preload="metadata"
                  playsInline
                  style={{ transform: `scale(${zoom})` }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
                  onError={() => setHasVideo(false)}
                >
                  Tu navegador no soporta video HTML5.
                </video>

                <div className="emulator-controls emulator-controls-modal" role="group" aria-label="Controles de video">
                  <button type="button" onClick={handleTogglePlay} aria-pressed={isPlaying}>
                    {isPlaying ? 'Pausar' : 'Reproducir'}
                  </button>
                  <button type="button" onClick={handleStop}>
                    Stop
                  </button>
                  <label className="video-volume" htmlFor="video-volume-control">
                    Volumen
                    <input
                      id="video-volume-control"
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(event) => handleVolumeChange(Number(event.currentTarget.value))}
                    />
                  </label>
                  <button type="button" onClick={handleToggleFullscreen} aria-pressed={isFullscreen}>
                    {isFullscreen ? 'Salir fullscreen' : 'Fullscreen'}
                  </button>
                </div>
              </>
            ) : (
              <div className="video-missing" role="status">
                <p>No se encontro el video del proyecto.</p>
                <p>
                  Ruta esperada: <code>{resolvedSrc}</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
