# 00 — AI RULES (Codex / Asistente)

## Objetivo del proyecto
Construir un portfolio/CV web profesional en React para demo por Google Meet, con un marco central tipo emulador que permita mostrar una app móvil (video/iframe/carrusel).

## Modo de trabajo (obligatorio)
- Prioridad: MVP funcional en 3 días → luego mejoras.
- Siempre producir cambios pequeños y verificables (iterar).
- No introducir librerías “pesadas” sin necesidad.
- Mantener accesibilidad básica (teclado, focus visible, aria-label).
- Responsive obligatorio (mobile + desktop).
- Mantener estructura clara: `src/components`, `src/pages`, `src/content`, `docs/`.

## Estándares de código
- TypeScript estricto si es viable (tipos para props y datos de contenido).
- Componentes pequeños: 1 responsabilidad.
- Evitar “magic strings”: centralizar datos en `src/content/*`.
- Nombres: kebab-case en archivos, PascalCase en componentes.
- No hardcodear URLs: usar constantes/config.

## Commits y Git
- Commits semánticos:
  - feat:, fix:, docs:, chore:, refactor:
- Cada “feature” relevante en rama:
  - feat/layout-home
  - feat/emulator
  - docs/readme-evidences
- Tag al final de cada día: v0.1.0, v0.2.0, v1.0.0

## Entregables (Definition of Done)
- Build sin errores (`npm run build`).
- Deploy en Vercel/Netlify funcionando.
- README con:
  - setup
  - scripts
  - estructura
  - decisiones clave
  - link de demo
- Evidencias: capturas + gif/video + checklist en `/docs`.

## Reglas de seguridad
- No exponer tokens/API keys en el repo.
- No incluir datos personales sensibles (solo los necesarios para CV).