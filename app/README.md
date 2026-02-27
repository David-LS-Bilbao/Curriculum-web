# Curriculum Web App

Aplicacion frontend del proyecto **Curriculum Web (FCT)**, inicializada con:

- React
- Vite
- TypeScript

## Ubicacion del proyecto

La app vive en `app/` porque el repositorio ya contiene `docs/` en la raiz.

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

## Siguiente paso recomendado

Implementar las secciones reales del MVP (Hero, EmulatorShowcase, Projects, Skills, Contact) reutilizando `src/content/` para contenido tipado.
