# Curriculum Web (FCT) - v0.0.1

Portfolio/CV web profesional para FCT (DAM), con foco en presentacion de proyectos y demo en formato movil.

## Produccion

- GitHub Pages: https://david-ls-bilbao.github.io/Curriculum-web/
- Repositorio: https://github.com/David-LS-Bilbao/Curriculum-web

## Stack

- React
- Vite
- TypeScript
- CSS (mobile-first)

## Estructura del repositorio

```text
.
├─ docs/   # contexto, reglas de IA y calidad del proyecto
└─ app/    # aplicacion frontend
```

## Estado actual

- Hero con imagen de perfil, CTAs y fallback de CV.
- EmulatorShowcase con selector video/web.
- Modal de video para proyectos.
- Projects con botones Repo/Web/Video segun contenido.
- Contact con email, telefono y redes sociales.
- Deploy automatico a GitHub Pages con GitHub Actions.

## Proyectos en la home

- Curriculum Web
- PymeTask
- PROYECTO-MASTER-IA
- terapia-floral-silvia
- Medicheck (Bootcamp)

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
cd app
npm install
npm run dev
```

## Scripts utiles

Ejecutar desde `app/`:

```bash
npm run typecheck
npm run lint
npm run build
```

## Assets publicos relevantes

- `app/public/cv.pdf`
- `app/public/userImage.png`
- `app/public/demo/app-demo.mp4`
- `app/public/demo/pymetask.mp4`

## Documentacion

- `docs/PROJECT_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/CALIDAD.md`
