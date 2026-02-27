# Curriculum Web (FCT)

Portfolio/CV web profesional para FCT (DAM), con un bloque central de demo tipo emulador móvil para presentar proyectos en reuniones (por ejemplo, Google Meet).

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

## Estado actual de la Home

- Hero (nombre, rol, pitch y CTAs)
- EmulatorShowcase (marco móvil con placeholder)
- Projects (cards renderizadas desde contenido tipado)
- Contact (email, copiar email y enlaces)

## Demo en producción

- https://curriculumweb-six.vercel.app/

## Requisitos

- Node.js 20+
- npm 10+

## Puesta en marcha local

```bash
cd app
npm install
npm run dev
```

## Scripts importantes

Ejecutar desde `app/`:

```bash
npm run typecheck
npm run lint
npm run build
```

## Archivo CV

El botón "Descargar CV" apunta a:

```text
/cv.pdf
```

Para activarlo, coloca tu CV en:

```text
app/public/cv.pdf
```

## Documentación del proyecto

- `docs/PROJECT_CONTEXT.md`
- `docs/AI_RULES.md`
- `docs/CALIDAD.md`
