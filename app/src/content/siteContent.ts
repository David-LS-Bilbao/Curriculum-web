export type Profile = {
  name: string
  role: string
  pitch: [string, string]
}

export type HeroCta = {
  label: string
  href: string
  external?: boolean
}

export type ProjectItem = {
  id: string
  title: string
  stack: string[]
  bullets: [string, string]
  repoUrl?: string
  demoUrl?: string
  videoUrl?: string
}

export type ContactInfo = {
  email: string
  message: string
  linkedinUrl: string
  githubUrl: string
}

export const profile: Profile = {
  name: 'Nombre Apellido',
  role: 'Desarrollador/a Web | DAM FCT',
  pitch: [
    'Construyo interfaces claras, rapidas y accesibles para producto web.',
    'Me enfoco en resolver necesidades reales con entregas pequeñas y solidas.',
  ],
}

export const heroCtas: HeroCta[] = [
  { label: 'GitHub', href: 'https://github.com/', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
  { label: 'Descargar CV', href: '/cv.pdf' },
]

export const projects: ProjectItem[] = [
  {
    id: 'cv-web',
    title: 'Curriculum Web',
    stack: ['React', 'TypeScript', 'Vite'],
    bullets: [
      'Home responsive con enfoque mobile-first.',
      'Secciones desacopladas para evolucionar el MVP por iteraciones.',
    ],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
  {
    id: 'mobile-emulator-demo',
    title: 'Mobile Emulator Demo',
    stack: ['React', 'CSS', 'HTML5 Video'],
    bullets: [
      'Marco tipo movil para demo durante entrevistas o videollamadas.',
      'Preparado para modo video, iframe o carrusel de capturas.',
    ],
    repoUrl: 'https://github.com/',
    videoUrl: 'https://example.com/video',
  },
  {
    id: 'portfolio-ui-kit',
    title: 'Portfolio UI Kit',
    stack: ['TypeScript', 'Design Tokens', 'Accessibility'],
    bullets: [
      'Componentes reutilizables con tipado estricto.',
      'Controles con foco visible y navegacion por teclado.',
    ],
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/ui-kit',
    videoUrl: 'https://example.com/ui-kit-video',
  },
]

export const contact: ContactInfo = {
  email: 'tu.email@ejemplo.com',
  message: 'Si quieres colaborar o ver mas demos, escribeme y te respondo pronto.',
  linkedinUrl: 'https://www.linkedin.com/',
  githubUrl: 'https://github.com/',
}
