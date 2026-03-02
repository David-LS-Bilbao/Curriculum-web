# Sprint D3 Release

## Objetivo del sprint
Cerrar una version release-candidate con contenido real, enlaces finales y SEO basico para despliegue publico del portfolio.

## Trabajo realizado
- Sustitucion de placeholders de contenido por datos reales en `siteContent.ts`.
- Actualizacion de LinkedIn a URL final limpia de perfil.
- Revision y limpieza de `projects`:
  - orden por importancia mantenido con `Curriculum Web` como proyecto principal,
  - eliminacion de enlaces `example.com`,
  - `repoUrl`, `demoUrl` y `videoUrl` ajustados a enlaces reales/disponibles.
- Fallback del CTA `Descargar CV`:
  - si `/cv.pdf` no existe, se redirige a LinkedIn,
  - se muestra aviso corto: "CV disponible en LinkedIn".
- SEO basico en `app/index.html`:
  - `title` y `meta description`,
  - Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`),
  - `twitter:card=summary_large_image`.
- Creacion de `app/public/og.png` como placeholder para social preview.
- Actualizacion de README de `app/` indicando placeholder OG y necesidad de reemplazo.
- Limpieza tecnica:
  - ajuste en `EmulatorShowcase` para pasar regla de lint (`react-hooks/set-state-in-effect`) y dejar gates de calidad en verde.

## Archivos tocados
- `app/src/content/siteContent.ts`
- `app/src/components/sections/HeroSection.tsx`
- `app/src/components/emulator/EmulatorShowcase.tsx`
- `app/src/styles/global.css`
- `app/index.html`
- `app/public/og.png`
- `app/README.md`

## Verificacion
- `npm run typecheck`: OK
- `npm run lint`: OK
- `npm run build`: OK

## Evidencias a capturar
- Lighthouse (mobile + desktop): Performance, Accessibility, Best Practices, SEO.
- Captura de deploy en produccion (Vercel) con URL final activa.
- Captura del preview social (Open Graph/Twitter card) usando `og.png`.
- Capturas finales de la Home:
  - Hero con CTAs,
  - bloque Emulator,
  - Projects,
  - Contact.
- Captura funcional del fallback de CV cuando no existe `/cv.pdf`.

## Pendientes opcionales
- Añadir tests de componentes con Vitest + Testing Library.
- Añadir i18n (ES/EN) con contenido centralizado en `siteContent` o diccionario dedicado.
- Mejoras de performance:
  - optimizacion de imagen OG final,
  - revision de lazy-loading adicional,
  - analisis de bundle y reduccion de JS inicial.
