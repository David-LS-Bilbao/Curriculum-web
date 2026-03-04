# Curriculum Web App

Aplicacion frontend del proyecto **Curriculum Web (FCT)**, inicializada con:

- React
- Vite
- TypeScript

## Demo en producción

- https://david-ls-bilbao.github.io/Curriculum-web/

## SEO social image

- Se incluye un placeholder en `app/public/og.png` para Open Graph/Twitter.
- Sustituir `og.png` por la imagen final de portada del portfolio antes de publicar.

- [Repositorio en GitHub](https://github.com/David-LS-Bilbao/Curriculum-web)

## Ubicacion del proyecto

La app vive en `app/` porque el repositorio ya contiene `docs/` en la raiz.

## Arquitectura

- **Componentes**: Separación clara entre secciones (`Hero`, `Projects`, `Contact`) y lógica de emulación (`EmulatorShowcase`, `VideoEmulatorModal`).
- **Estado**: React `useState` para control de modales y gestión de demos.
- **Estilos**: Vanilla CSS con enfoque Mobile-First y variables para consistencia.
- **Contenido**: Desacoplado en `src/content/siteContent.ts` para facilitar actualizaciones.
- **Accesibilidad**: Navegación por teclado, trapping de foco en modales y etiquetas ARIA semánticas.

## Requisitos

- Node.js 20+
- npm 10+

## Instalacion

Desde la raiz del repo:

```bash
cd app
npm install
```

## Comandos

```bash
npm run dev        # servidor local
npm run typecheck  # verificacion TS
npm run lint       # lint con ESLint
npm run test       # placeholder de tests
npm run build      # build de produccion
npm run preview    # previsualizar build
```

## Estructura base

```text
app/
  src/
    app/
      layout/
    components/
    content/
    styles/
```

- Status: **Release v0.0.1**
- Accesibilidad auditada
- SEO y Social Preview configurados (og:image)
- Performance optimizada (CLS/LCP quick wins)

## Fuente de contenido

El contenido visible de Home se define en `src/content/siteContent.ts`:
- Perfil y pitch profesionales
- CTAs de Hero (GitHub, LinkedIn, CV)
- Listado de proyectos (Curriculum Web, PymeTask, PROYECTO-MASTER-IA, Terapia Floral Silvia, Medicheck)
- Fuentes del emulador (`video` + `iframe`)
- Datos de contacto
