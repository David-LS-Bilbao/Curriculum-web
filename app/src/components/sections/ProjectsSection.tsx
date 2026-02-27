import type { ProjectItem } from '../../content/siteContent'

type ProjectsSectionProps = {
  projects: ProjectItem[]
}

type ProjectLink = {
  label: 'Repo' | 'Demo' | 'Video'
  href: string
}

function buildProjectLinks(project: ProjectItem): ProjectLink[] {
  const links: ProjectLink[] = []

  if (project.repoUrl) {
    links.push({ label: 'Repo', href: project.repoUrl })
  }

  if (project.demoUrl) {
    links.push({ label: 'Demo', href: project.demoUrl })
  }

  if (project.videoUrl) {
    links.push({ label: 'Video', href: project.videoUrl })
  }

  return links
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
