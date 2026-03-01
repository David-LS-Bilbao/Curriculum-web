# Sprint D1 - Emulador (Memoria Tecnica)

**Fecha:** 27 de febrero de 2026  
**Sprint:** D1 (implementacion del emulador funcional)  
**Proyecto:** Curriculum Web

## 1) Objetivo del sprint

Implementar un emulador real de demo movil en la Home del portfolio, sin dependencias nuevas, con:
- reproduccion de video dentro del PhoneFrame,
- controles funcionales (play/pause, mute, fullscreen),
- comportamiento responsive y accesible,
- manejo de ausencia del archivo de video con mensaje guia.

## 2) Trabajo realizado (cronologico)

### 2.1 Preparacion y validacion de base

1. Se reviso el estado actual del componente `EmulatorShowcase` y estilos asociados.
2. Se confirmo que la Home ya integraba el bloque del emulador en el orden de secciones esperado.
3. Se verifico la ruta objetivo del video (`/demo/app-demo.mp4`) y se detecto que el archivo no estaba servido desde la ruta publica correcta.

### 2.2 Implementacion del emulador funcional

1. Se reemplazo el placeholder por un `<video>` HTML5 dentro del PhoneFrame.
2. Se implementaron controles propios:
   - reproducir/pausar,
   - silenciar/activar sonido,
   - fullscreen real.
3. Se sincronizo el estado de interfaz con eventos del video para reflejar correctamente si esta en reproduccion o en mute.

### 2.3 Fullscreen real sobre el contenedor

1. Se implemento fullscreen sobre el contenedor del emulador (no sobre toda la pagina).
2. Se gestiono el estado con el evento `fullscreenchange` para que el boton refleje "Fullscreen" o "Salir fullscreen" segun corresponda.
3. Se añadieron estilos especificos para el estado fullscreen y mantener una visualizacion usable.

### 2.4 Fallback de ausencia del MP4

1. Se implemento deteccion de error de carga del video.
2. Si el archivo no esta disponible, el emulador muestra mensaje de guia con la ruta esperada:
   - `app/public/demo/app-demo.mp4`

### 2.5 Resolucion de incidencia real detectada

1. El video no se reproducia porque estaba ubicado en una ruta incorrecta dentro de `src`.
2. Se movio el archivo al directorio publico correcto de Vite:
   - de `app/src/app/public/demo/app-demo.mp4`
   - a `app/public/demo/app-demo.mp4`
3. Con esta correccion, el recurso quedo disponible en `/demo/app-demo.mp4`.

### 2.6 Actualizacion de documentacion de entorno

1. Se actualizaron referencias de demo en la documentacion para reflejar el estado desplegado.
2. Se mantuvo la trazabilidad en README de raiz y README de `app`.

## 3) Archivos creados/modificados

### Creados

- `app/public/demo/app-demo.mp4` (asset de demo en ruta publica)
- `docs/sprints/SPRINT_D1_EMULATOR.md` (esta memoria)

### Modificados

- `app/src/components/emulator/EmulatorShowcase.tsx`
- `app/src/styles/global.css`
- `app/src/content/siteContent.ts` (enlace de demo)
- `README.md` (raiz)
- `app/README.md`

## 4) Decisiones tecnicas justificadas

1. **Sin dependencias externas de video/player**  
   Se uso API nativa del navegador y React para mantener el MVP ligero y reducir complejidad.

2. **Uso de `public` para media estatica en Vite**  
   Se definio la ruta en `app/public/demo` porque Vite sirve assets publicos desde `public` cuando se consumen por URL absoluta.

3. **Fullscreen aplicado al contenedor del emulador**  
   Se eligio este enfoque para mantener contexto visual de demo movil y no romper la experiencia de navegacion de la Home.

4. **Fallback visible ante error de carga**  
   Se priorizo UX y soporte tecnico: el usuario/mentor ve rapidamente por que no aparece la demo y como resolverlo.

5. **Accesibilidad basica en controles**  
   Se incluyeron etiquetas semanticas, estado de botones y foco visible para navegacion por teclado.

## 5) Verificacion ejecutada

Se ejecutaron los gates de calidad definidos:

1. `npm run typecheck` -> OK  
2. `npm run lint` -> OK  
3. `npm run build` -> OK

Resultado: el sprint se integra sin romper compilacion ni build de produccion.

## 6) Evidencias a capturar (lista)

1. Captura de Home completa con el emulador visible.
2. Captura del estado "Reproducir/Pausar" durante reproduccion real.
3. Captura del estado "Silenciar/Activar sonido".
4. Captura del modo fullscreen activo del emulador.
5. Captura del fallback cuando falta el archivo MP4 (mensaje guia).
6. Captura de red (DevTools) mostrando carga correcta de `/demo/app-demo.mp4`.
7. Captura de terminal con `typecheck`, `lint` y `build` en OK.
8. Captura del despliegue actualizado en Vercel.

## 7) Pendientes y siguientes pasos

1. Sustituir enlaces placeholder de repos/demo/video por URLs finales reales.
2. Añadir `poster` del video para mejorar carga inicial del emulador.
3. Optimizar peso del MP4 para mejorar rendimiento en movil y red lenta.
4. Completar asset de CV en `app/public/cv.pdf` si aun no esta.
5. Añadir pruebas minimas del flujo del emulador (interaccion de controles y fallback).
6. Actualizar checklist de evidencias con las capturas finales del sprint.
