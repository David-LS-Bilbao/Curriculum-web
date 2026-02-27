import type { HeroCta, Profile } from '../../content/siteContent'

type HeroSectionProps = {
  profile: Profile
  ctas: HeroCta[]
}

export function HeroSection({ profile, ctas }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <p className="eyebrow">Curriculum Web</p>
      <h1 id="hero-heading">{profile.name}</h1>
      <p className="hero-role">{profile.role}</p>

      <div className="hero-pitch">
        {profile.pitch.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="cta-list" aria-label="Accesos directos">
        {ctas.map((cta) => (
          <a
            key={cta.label}
            className="cta-button"
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noreferrer noopener' : undefined}
          >
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  )
}
