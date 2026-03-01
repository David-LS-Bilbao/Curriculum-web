# Sprint D2 Emulator

## Resumen
Se transformo `EmulatorShowcase` de placeholder a componente funcional de demo.
Se integro video real dentro del PhoneFrame y se implementaron controles propios (play/pause, mute, fullscreen) sin librerias externas.
Se corrigio una incidencia de ruta del MP4 moviendo el asset a `app/public/demo`.
Se agrego poster y se ajusto el render del video para mejorar ocupacion en la pantalla del mock de telefono.
Se implemento `DemoSwitcher` para alternar entre fuente `video` e `iframe`.
Para el iframe se incorporo carga lazy, sandbox seguro y timeout de 4 segundos con fallback y boton "Volver a video".
Se mantuvo accesibilidad con labels, roles y foco visible.

## Objetivo del sprint
Entregar el core demo del emulador para entrevistas/presentaciones, con experiencia estable y fallback ante fallos de carga.

## Trabajo realizado
- Implementacion de `<video>` en PhoneFrame con `preload="metadata"` y `poster`.
- Controles funcionales: reproducir/pausar, silenciar/activar sonido y fullscreen.
- Fullscreen aplicado al contenedor del emulador con sincronizacion de estado.
- Fallback de video cuando falla carga del MP4.
- Definicion de `demoSources` en `siteContent.ts`.
- Implementacion de selector de demo (tabs) para `video` e `iframe`.
- Iframe con `loading="lazy"` y `sandbox="allow-scripts allow-same-origin"`.
- Timeout de 4s para iframe no cargado + accion "Volver a video".
- Ajuste visual para reducir margenes y mejorar encaje del video en pantalla.

## Archivos creados/modificados
- `app/public/demo/app-demo.mp4`
- `app/src/components/emulator/EmulatorShowcase.tsx`
- `app/src/content/siteContent.ts`
- `app/src/styles/global.css`
- `README.md`
- `app/README.md`
- `docs/TASKS_BACKLOG_3_DAYS.md`

## Decisiones técnicas
- Mantener implementacion sin dependencias para controlar comportamiento y tamaño del bundle.
- Centralizar fuentes del emulador en `siteContent.ts` para evitar hardcode en el componente.
- Usar timeout de 4s en iframe para no bloquear la UX cuando el sitio remoto deniega embebido.
- Mantener fullscreen en el contenedor para preservar contexto del PhoneFrame.
- Priorizar fallback accionable ("Volver a video") frente a mensajes pasivos.

## Verificación
- `npm run typecheck`: OK
- `npm run lint`: OK
- `npm run build`: OK

## Evidencias capturadas
- Emulador con video reproduciendo en desktop.
- Estado mute/unmute y play/pause en controles.
- Fullscreen activo y retorno a vista normal.
- Cambio de demo usando DemoSwitcher.
- Fallback de iframe tras timeout con boton "Volver a video".
- Captura de red cargando `/demo/app-demo.mp4`.

## Pendientes / siguientes pasos
- Completar fallback por imagenes (carrusel/capturas) en la fuente de demo.
- Reemplazar `iframe` de prueba por URL final embebible estable.
- Ajustar contenido real de proyectos y links definitivos.
- Añadir pruebas minimas de interaccion del emulador.
