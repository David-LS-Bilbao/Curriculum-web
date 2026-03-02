import type { ProjectItem } from '../../content/siteContent'

type ProjectsSectionProps = {
  projects: ProjectItem[]
  onOpenVideo: (title: string, src: string) => void
}

type ProjectLink = {
  label: 'Repo' | 'Video' | 'Web'
  href: string
  external: boolean
}

function buildProjectLinks(project: ProjectItem): ProjectLink[] {
  const links: ProjectLink[] = []

  if (project.repoUrl) {
    links.push({ label: 'Repo', href: project.repoUrl, external: true })
  }

  if (project.videoUrl) {
    links.push({ label: 'Video', href: project.videoUrl, external: false })
  }

  if (project.demoUrl && (project.id === 'proyecto-master-ia' || project.id === 'terapia-floral-silvia')) {
    links.push({ label: 'Web', href: project.demoUrl, external: true })
  }

  return links
}

export function ProjectsSection({ projects, onOpenVideo }: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project) => {
          const links = buildProjectLinks(project)

          return (
            <article key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-stack">
                <span className="sr-only">Stack:</span>
                {project.stack.join(' · ')}
              </p>

              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="project-actions" aria-label={`Enlaces ${project.title}`}>
                {links.map((link) => (
                  link.label === 'Video' ? (
                    <button
                      key={link.label}
                      type="button"
                      className="project-action-button"
                      onClick={() => onOpenVideo(project.title, link.href)}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener">
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
