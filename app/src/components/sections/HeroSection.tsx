import { useEffect, useMemo, useState } from 'react'
import type { HeroCta, Profile } from '../../content/siteContent'

type HeroSectionProps = {
  profile: Profile
  ctas: HeroCta[]
}

export function HeroSection({ profile, ctas }: HeroSectionProps) {
  const [hasCvPdf, setHasCvPdf] = useState<boolean | null>(null)

  useEffect(() => {
    let isMounted = true

    const checkCvPdf = async () => {
      try {
        const response = await fetch('/cv.pdf', { method: 'HEAD', cache: 'no-store' })
        if (isMounted) {
          setHasCvPdf(response.ok)
        }
      } catch {
        if (isMounted) {
          setHasCvPdf(false)
        }
      }
    }

    void checkCvPdf()

    return () => {
      isMounted = false
    }
  }, [])

  const resolvedCtas = useMemo(() => {
    return ctas.map((cta) => {
      const isCvCta = cta.href === '/cv.pdf'

      if (isCvCta && hasCvPdf === false) {
        return {
          ...cta,
          href: profile.linkedinUrl,
          external: true,
          isCvFallback: true,
        }
      }

      return {
        ...cta,
        isCvFallback: false,
      }
    })
  }, [ctas, hasCvPdf, profile.linkedinUrl])

  const isCvFallbackActive = resolvedCtas.some((cta) => cta.isCvFallback)

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-badge">FCT | React+TS | Vercel</div>
      <div className="hero-title-row">
        <h1 id="hero-heading">{profile.name}</h1>
        <img
          className="hero-avatar"
          src="/userImage.png"
          alt={`Foto de perfil de ${profile.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="hero-role">{profile.role}</p>

      <div className="hero-highlights">
        <span className="chip">React+TS</span>
        <span className="chip">Kotlin</span>
        <span className="chip">IA aplicada</span>
      </div>

      <div className="hero-pitch">
        {profile.pitch.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="cta-list" aria-label="Accesos directos">
        {resolvedCtas.map((cta, index) => (
          <a
            key={cta.label}
            className={`cta-button ${index === 0 ? 'cta-primary' : 'cta-secondary'}`}
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noreferrer noopener' : undefined}
            title={cta.isCvFallback ? 'CV disponible en LinkedIn' : undefined}
            aria-label={cta.label}
          >
            {cta.label}
          </a>
        ))}
      </div>

      {isCvFallbackActive ? <p className="cta-fallback-note">CV disponible en LinkedIn</p> : null}
    </section>
  )
}
