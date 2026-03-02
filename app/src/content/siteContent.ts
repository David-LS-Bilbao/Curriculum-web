// app/src/content/siteContent.ts

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

export type DemoSource =
  | { id: string; label: string; type: "video"; src: string; poster: string }
  | { id: string; label: string; type: "iframe"; src: string }

export const profile: Profile = {
  name: "David López Sotelo",
  role: "DAM (FCT) | Frontend (React/TS) + Android (Kotlin) | IA aplicada",
  pitch: [
    "Construyo productos web claros y accesibles, y apps Android con Kotlin + Jetpack Compose.",
    "Aporto visión de negocio y experiencia liderando equipos, con entregas pequeñas y sólidas.",
  ],
}

export const heroCtas: HeroCta[] = [
  { label: "GitHub", href: "https://github.com/David-LS-Bilbao", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/david-lopez-sotelo-256a70154/",
    external: true,
  },
  { label: "Descargar CV", href: "/cv.pdf" },
]

export const projects: ProjectItem[] = [
  {
    id: "curriculum-web",
    title: "Curriculum Web (FCT)",
    stack: ["React", "TypeScript", "Vite", "Vercel"],
    bullets: [
      "Portfolio con emulador móvil para mostrar demos en videollamada.",
      "DemoSwitcher video/iframe + fullscreen + fallbacks y accesibilidad básica.",
    ],
    repoUrl: "https://github.com/David-LS-Bilbao/Curriculum-web",
    demoUrl: "https://curriculumweb-six.vercel.app/",
  },
  {
    id: "pymetask",
    title: "PymeTask (TFG DAM)",
    stack: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    bullets: [
      "App Android para gestión de PYMEs (proyecto final DAM).",
      "Arquitectura y UI moderna con Compose + persistencia y servicios Firebase.",
    ],
    repoUrl: "https://github.com/David-LS-Bilbao/PymeTask",
  },
  {
    id: "proyecto-master-ia",
    title: "PROYECTO-MASTER-IA (Verity News)",
    stack: ["TypeScript", "Full-Stack", "IA/RAG (prototipo)"],
    bullets: [
      "Proyecto de máster orientado a IA aplicada (resumen/analítica de noticias).",
      "Enfoque en arquitectura, pipeline y calidad de entrega.",
    ],
    repoUrl: "https://github.com/David-LS-Bilbao/PROYECTO-MASTER-IA",
  },
  {
    id: "terapia-floral-silvia",
    title: "Terapia Floral Silvia (web)",
    stack: ["Astro", "Frontend", "Deploy"],
    bullets: [
      "Web informativa con enfoque en velocidad, SEO y estructura limpia.",
      "Diseño responsive y contenido organizado para cliente real.",
    ],
    repoUrl: "https://github.com/David-LS-Bilbao/terapia-floral-silvia",
  },
]

export const contact: ContactInfo = {
  email: "TODO:tu-email@dominio.com",
  message:
    "Si quieres colaborar o ver una demo en directo (Meet), escríbeme y te respondo lo antes posible.",
  linkedinUrl: "https://www.linkedin.com/in/david-lopez-sotelo-256a70154/",
  githubUrl: "https://github.com/David-LS-Bilbao",
}

export const demoSources: DemoSource[] = [
  {
    id: "video",
    label: "Vídeo demo",
    type: "video",
    src: "/demo/app-demo.mp4",
    poster: "/demo/app-demo-poster.jpg",
  },
  {
    id: "iframe",
    label: "Web (Vercel)",
    type: "iframe",
    src: "https://curriculumweb-six.vercel.app/",
  },
]