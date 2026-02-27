# Prompts Codex — Curriculum Web

## Prompt base (siempre)
Actúa como Senior Frontend Engineer (React + Vite + TypeScript + Tailwind).
Objetivo: portfolio/CV profesional con emulador móvil para demo en Google Meet.
Requisitos: accesibilidad básica, responsive, commits pequeños.
Entrega: rutas de archivos + código listo para pegar + checklist de verificación.

---

## Tarea: Emulador (PhoneFrame + fuentes)
Implementa `PhoneFrame` y `EmulatorShowcase`:
- Marco estilo smartphone (bordes, notch, sombra)
- Soporta 3 modos: VIDEO (mp4), IFRAME (url), IMAGES (carrusel simple)
- `DemoSwitcher`: cambiar entre 2-3 demos definidas en `src/content/siteContent.ts`
- Botón Fullscreen (para video/iframe)
- Accesibilidad: aria-label, teclado, focus

Entrega:
- Archivos a crear/modificar
- Tipos TS
- Uso desde Home

---

## Tarea: Sección Proyectos
Crear `ProjectsSection` con cards:
- Datos desde `src/content/siteContent.ts`
- Botones: Repo / Demo / Video
- Responsive grid

---

## Tarea: Pulido final
- SEO (title/description/OG)
- Lazy load de video o poster
- Micro-animaciones opcionales sin librerías pesadas
- README final con “Decisiones” y “Deploy”