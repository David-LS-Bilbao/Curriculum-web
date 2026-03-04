export type Profile = {
  name: string
  role: string
  linkedinUrl: string
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
  phone: string
  message: string
  facebookUrl: string
  instagramUrl: string
  xUrl: string
}

export type DemoSource =
  | {
      id: string
      label: string
      type: 'video'
      src: string
      poster: string
    }
  | {
      id: string
      label: string
      type: 'iframe'
      src: string
    }

export const profile: Profile = {
  name: 'David López Sotelo',
  role: 'Desarrollador/a Web | DAM FCT',
  linkedinUrl: 'https://www.linkedin.com/in/david-lopez-sotelo-256a70154/',
  pitch: [
    'Construyo interfaces claras, rapidas y accesibles para producto web.',
    'Me enfoco en resolver necesidades reales con entregas pequeñas y solidas.',
  ],
}

export const heroCtas: HeroCta[] = [
  { label: 'GitHub', href: 'https://github.com/David-LS-Bilbao', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-lopez-sotelo-256a70154/', external: true },
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
    repoUrl: 'https://github.com/David-LS-Bilbao/Curriculum-web',
    demoUrl: 'https://david-ls-bilbao.github.io/Curriculum-web/',
  },
  {
    id: 'pyme-task',
    title: 'PymeTask',
    stack: ['React', 'TypeScript', 'Node.js'],
    bullets: [
      'Aplicacion enfocada en gestion de tareas para pequenas empresas.',
      'Estructura modular para evolucionar funcionalidades por iteraciones.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/PymeTask',
    videoUrl: '/demo/pymetask.mp4',
  },
  {
    id: 'proyecto-master-ia',
    title: 'PROYECTO-MASTER-IA',
    stack: ['TypeScript', 'Node.js', 'IA'],
    bullets: [
      'Proyecto final orientado a integraciones de IA y flujo full-stack.',
      'Arquitectura preparada para escalar servicios y automatizaciones.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/PROYECTO-MASTER-IA',
    demoUrl: 'https://verity-news.vercel.app/',
  },
  {
    id: 'terapia-floral-silvia',
    title: 'terapia-floral-silvia',
    stack: ['React', 'TypeScript', 'Vite'],
    bullets: [
      'Sitio web orientado a presencia digital y captacion de clientes.',
      'Diseno limpio y estructura de contenidos enfocada a conversion.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/terapia-floral-silvia',
    demoUrl: 'https://silvia-adame-terapiasnaturales.vercel.app/',
  },
  {
    id: 'bootcamp-medicheck',
    title: 'Medicheck (Bootcamp)',
    stack: ['HTML5', 'CSS3', 'Responsive'],
    bullets: [
      'MVP estatico para seguimiento de tratamientos con interfaz web.',
      'Maqueta mobile-first con dashboard, historial y formularios.',
    ],
    repoUrl: 'https://github.com/David-LS-Bilbao/BOOTCAMP_medicheck',
    demoUrl: 'https://david-ls-bilbao.github.io/BOOTCAMP_medicheck/',
  },
]

export const contact: ContactInfo = {
  email: 'lopezsotelo77@gmail.com',
  phone: '605279604',
  message: 'Disponible para colaboraciones y oportunidades junior. Contactame por email o telefono y te respondo pronto.',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  xUrl: 'https://x.com',
}

export const demoSources: DemoSource[] = [
  {
    id: 'video',
    label: 'Video demo',
    type: 'video',
    src: '/demo/app-demo.mp4',
    poster: '/demo/app-demo-poster.jpg',
  },
  {
    id: 'iframe',
    label: 'Web demo',
    type: 'iframe',
    src: 'https://curriculumweb-six.vercel.app/',
  },
]
