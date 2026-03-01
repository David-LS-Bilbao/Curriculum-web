# Sprint D1 Home

## Resumen
Se inicializo la aplicacion en `app/` con React + Vite + TypeScript y se preparo la base del proyecto para iterar rapido.
Se limpio el template por defecto y se organizo `src` por capas (`app`, `components`, `content`, `styles`).
Se implemento la Home con secciones principales (Hero, Projects, Contact) y contenido tipado.
Se incorporaron CTAs (GitHub, LinkedIn, CV) y un primer bloque de emulador para reservar el espacio central de demo.
Se dejo pipeline de calidad con `typecheck`, `lint` y `build`.
Se documento instalacion, comandos y estructura en README raiz y README de la app.
La version quedo desplegable y lista para empezar el trabajo core del emulador en D2.

## Objetivo del sprint
Disponer de una Home MVP funcional, responsive y desplegable, con arquitectura base solida y checklist minimo de calidad.

## Trabajo realizado
- Inicializacion React + Vite + TypeScript en `app/`.
- Definicion de scripts de trabajo (`dev`, `typecheck`, `lint`, `build`, `preview`).
- Estructura inicial de carpetas en `src`.
- Implementacion de `HeroSection`, `ProjectsSection` y `ContactSection`.
- Integracion de contenido tipado en `siteContent.ts`.
- Estilos mobile-first para layout general y cards.
- Actualizacion de README para uso local y despliegue.

## Archivos creados/modificados
- `app/package.json`
- `app/src/app/App.tsx`
- `app/src/components/sections/HeroSection.tsx`
- `app/src/components/sections/ProjectsSection.tsx`
- `app/src/components/sections/ContactSection.tsx`
- `app/src/content/siteContent.ts`
- `app/src/styles/global.css`
- `README.md`
- `app/README.md`

## Decisiones técnicas
- Separar contenido y presentacion para mantener datos editables sin tocar UI.
- Usar TypeScript estricto en datos y props para reducir errores de integracion.
- Mantener CSS propio sin dependencias para acelerar MVP y control visual.
- Aplicar enfoque mobile-first desde el inicio para cumplir criterio responsive.
- Incluir desde D1 los gates de calidad para evitar deuda tecnica temprana.

## Verificación
- `npm run typecheck`: OK
- `npm run lint`: OK
- `npm run build`: OK

## Evidencias capturadas
- Home desktop (Hero + Projects + Contact).
- Home mobile con layout responsive.
- Terminal con build en verde.
- Captura de deploy inicial en Vercel.
- Captura de estructura de carpetas en `app/src`.

## Pendientes / siguientes pasos
- Completar bloque de emulador real (video, fullscreen y estados).
- Añadir selector de demos (video/web).
- Resolver fallback de fuentes alternativas de demo.
- Refinar README final y checklist de evidencias.
