# Memoria Tecnica de Desarrollo - Curriculum Web

## Metadatos
- Proyecto: Curriculum Web (FCT)
- Repo: https://github.com/David-LS-Bilbao/Curriculum-web
- Producción (Vercel): https://curriculumweb-six.vercel.app/
- Versión: v1.0.0
- Fecha: 2026-03-03
- Commit: <hash corto>



## Objetivo del documento
Registrar, en orden cronologico, las acciones de programacion realizadas en el proyecto para:
- redactar la memoria de FCT,
- justificar decisiones tecnicas,
- responder preguntas en defensa tecnica.

Este documento no incluye codigo; solo explica que se hizo, por que y como se verifico.

## 1) Arranque del proyecto y analisis inicial

### 1.1 Revision del repositorio
Se reviso la estructura inicial para confirmar:
- existencia de `docs/` con documentacion del proyecto,
- estado de `app/` con scaffold de Vite,
- estado de git y rama activa.

### 1.2 Lectura de documentacion base
Se analizaron los documentos de contexto y reglas:
- `docs/AI_RULES.md`
- `docs/CALIDAD.md`
- `docs/PROJECT_CONTEXT.md`

Con esto se definieron criterios de trabajo:
- cambios pequenos y verificables,
- enfoque MVP,
- accesibilidad basica y responsive obligatorios,
- validacion tecnica con build/lint/typecheck.

## 2) Inicializacion y estructura base React + Vite + TypeScript

### 2.1 Decision de ubicacion
Como ya existia `docs/` en raiz, se mantuvo la app frontend dentro de `app/`.

### 2.2 Normalizacion del scaffold
Se limpio la plantilla por defecto y se dejo una base de proyecto con estructura clara.

### 2.3 Scripts de calidad y trabajo diario
Se definieron scripts para estandarizar ejecucion:
- desarrollo local,
- typecheck,
- lint,
- build,
- placeholder de test.

Motivo: facilitar calidad repetible y preparar el flujo pre-merge.

### 2.4 Estructura funcional de `src`
Se organizo el codigo en carpetas por responsabilidad:
- `app/layout` para estructura general,
- `components` para UI reutilizable,
- `content` para datos tipados,
- `styles` para estilos globales.

## 3) Primera version funcional de Home

### 3.1 Home base
Se construyo una Home inicial con layout principal y contenido tipado para arrancar el MVP.

### 3.2 Integracion inicial de EmulatorShowcase
Se creo el componente de emulador en version placeholder y se integro entre Hero y Projects para respetar el objetivo de demo central.

### 3.3 Estilos base responsive
Se definio CSS mobile-first con ancho controlado para desktop y adaptacion en mobile.

## 4) Implementacion completa de secciones de Home

### 4.1 HeroSection
Se implemento:
- nombre y rol,
- dos lineas de pitch,
- CTAs a GitHub, LinkedIn y descarga de CV (`/cv.pdf`).

Decision: mantener texto y enlaces en `content` para separar contenido de presentacion.

### 4.2 ProjectsSection
Se implemento renderizado por datos tipados:
- cards por proyecto,
- titulo, stack y dos bullets,
- botones Repo/Demo/Video solo cuando el enlace existe.

Se aplico grid responsive:
- 1 columna en movil,
- 2 columnas en tablet,
- 3 columnas en desktop.

### 4.3 ContactSection
Se implemento:
- email visible y enlace `mailto`,
- boton "Copiar email",
- enlaces a LinkedIn y GitHub,
- mensaje corto de contacto.

### 4.4 Copia al portapapeles con fallback
Se uso estrategia doble:
- API moderna `navigator.clipboard`,
- fallback para navegadores con compatibilidad limitada.

Motivo: robustez entre entornos sin agregar librerias.

### 4.5 Integracion final en `App`
Orden final aplicado:
1. Hero
2. EmulatorShowcase
3. Projects
4. Contact

## 5) Evolucion del emulador a version real

### 5.1 Sustitucion de placeholder por video real
El emulador paso a mostrar video en el marco movil con fuente:
- `/demo/app-demo.mp4`

### 5.2 Controles implementados sin dependencias
Se implementaron controles propios:
- reproducir/pausar,
- silenciar/activar sonido,
- fullscreen real.

### 5.3 Fullscreen real sobre el contenedor
El modo fullscreen se aplica al contenedor del emulador y se sincroniza con su estado visual/logico.

Motivo: mejor experiencia de demo y coherencia con el requisito.

### 5.4 Fallback cuando falta el MP4
Si el archivo no existe o falla la carga, se muestra mensaje guia con la ruta esperada en `public`.

### 5.5 DemoSwitcher y fuente web embebida
Se incorporo un selector de demos para alternar entre fuente de video y fuente web (`iframe`) sin recargar la pagina.

### 5.6 Control de errores en iframe
Para la demo web se definio timeout de 4 segundos. Si no carga, se muestra fallback con accion directa "Volver a video".

### 5.7 Ajuste visual del PhoneFrame
Se ajustaron estilos del contenedor y del video para reducir margenes visibles y mejorar el encaje en la ventana del telefono.

## 6) Incidencia tecnica y resolucion

### 6.1 Problema detectado
El video no se reproducia porque el archivo estaba en una ruta incorrecta dentro de `src`.

### 6.2 Causa raiz
En Vite, los assets estaticos para rutas absolutas se sirven desde `app/public`, no desde `src`.

### 6.3 Correccion aplicada
Se movio el archivo a la ruta correcta:
- `app/public/demo/app-demo.mp4`

Resultado: el video quedo disponible para `/demo/app-demo.mp4`.

## 7) Documentacion para GitHub y despliegue

### 7.1 README raiz
Se creo `README.md` en la raiz del repo con:
- descripcion del proyecto,
- stack,
- estructura del repo,
- comandos de trabajo,
- estado funcional de Home.

### 7.2 README de app
Se actualizo `app/README.md` para reflejar estado real y comandos actuales.

### 7.3 URL de produccion
Se registro la URL publica desplegada en Vercel en la documentacion.

## 8) Control de versiones y despliegue continuo

### 8.1 Commits y push
Se realizaron commits incrementales con mensajes descriptivos y push a `main`.

### 8.2 Integracion con Vercel
Con cada push a rama principal, se habilita redeploy automatico del sitio.

## 9) Validacion tecnica aplicada en cada fase

En cada bloque importante de cambios se validaron los gates de calidad:
- `npm run typecheck`
- `npm run lint`
- `npm run build`

Resultado general: cambios integrados sin romper build.

## 10) Decisiones tecnicas clave para defender en memoria

### 10.1 Separacion contenido/UI
El contenido del portfolio se centraliza en `content` tipado para:
- facilitar mantenimiento,
- evitar hardcode disperso,
- mejorar escalabilidad.

### 10.2 Enfoque mobile-first
Se priorizo experiencia en movil y luego se escalo a tablet/desktop con media queries.

### 10.3 Accesibilidad basica integrada
Se incluyeron:
- labels y roles en secciones/controles,
- feedback de estado para acciones de usuario,
- foco visible para navegacion por teclado.

### 10.4 Sin dependencias nuevas
Se resolvieron requisitos con API web nativa y React base para:
- reducir complejidad,
- evitar sobrecarga de bundle,
- mantener MVP rapido de mantener.

## 11) Preguntas tecnicas probables y guia de respuesta

### 11.1 Por que `app/` y no raiz
Porque la raiz ya contiene `docs/` y se quiso separar documentacion y frontend de forma clara.

### 11.2 Por que el video debe estar en `public`
Porque Vite sirve recursos estaticos publicos desde `public` cuando se consumen por URL absoluta.

### 11.3 Como se asegura que no se rompa al subir cambios
Aplicando gates repetibles de typecheck, lint y build antes de integrar y desplegar.

### 11.4 Por que controles propios en vez de libreria de player
Para cumplir requisitos sin dependencias nuevas y mantener control directo del comportamiento.

### 11.5 Como escalarias el proyecto despues del MVP
Separando datos por dominios (perfil/proyectos/demo), agregando tests de componentes criticos y mejorando observabilidad de errores de carga de assets.

## 12) Estado actual resumido

El proyecto cuenta con:
- Home funcional completa,
- emulador con video/iframe, DemoSwitcher y controles reales,
- fallback de ausencia de media,
- documentacion de uso/despliegue,
- flujo de despliegue en Vercel desde GitHub.

## 13) Actualizacion de contenido real (2026-03-02)

Se actualizo `app/src/content/siteContent.ts` para pasar de contenido generico a contenido real del portfolio:
- perfil profesional y pitch actualizados,
- enlaces reales de GitHub y LinkedIn en Hero y Contact,
- listado de proyectos reales (Curriculum Web, PymeTask, PROYECTO-MASTER-IA, Terapia Floral Silvia),
- etiquetas del DemoSwitcher ajustadas ("Video demo" y "Web (Vercel)").

Impacto:
- no hubo cambios de arquitectura ni de componentes,
- el cambio fue de contenido tipado centralizado,
- build y typecheck se mantienen estables tras la actualizacion.

Pendiente abierto:
- reemplazar `TODO:tu-email@dominio.com` por email final antes de release final.


## 14) Fase 3: Accesibilidad, SEO y Performance (Día 3)

### 14.1 Auditoría de Accesibilidad (A11y)
Se realizó una auditoría completa de navegación por teclado y semántica:
- **Aria-labels**: Se añadieron etiquetas descriptivas a todos los enlaces de CTAs y botones de acción de proyectos (e.g., "Repositorio de PymeTask").
- **Focus Trapping**: Se implementó atrapado de foco en el `VideoEmulatorModal` para evitar que la navegación por teclado "escape" al fondo.
- **Restauración de foco**: Al cerrar el modal, el foco regresa automáticamente al botón que lo activó.
- **Teclas rápidas**: Se aseguró que la tecla `ESC` cierre correctamente todos los diálogos.

### 14.2 SEO y Social Preview
Se optimizó la presencia en buscadores y redes sociales:
- **Meta Tags**: Integración de Open Graph (Facebook/LinkedIn) y Twitter Cards.
- **OG Image**: Generación de una imagen de previsualización profesional (`og.png`) de 1200x630px.
- **URL Absolutas**: Se forzó el uso de URLs absolutas en meta-etiquetas de imagen para asegurar la carga en validadores externos.

### 14.3 Rendimiento (Quick Wins)
Acciones para mejorar el LCP (Largest Contentful Paint) y CLS (Cumulative Layout Shift):
- **Aspect-ratio**: Se bloqueó el ratio de aspecto (9/19.5) en el CSS del emulador para evitar saltos de layout durante la carga.
- **Optimización de Media**: Uso de `poster` para vídeos y `loading="lazy"` con `sandbox` para iframes.
- **Vite Build**: Verificación de bundle final y optimización de assets estáticos.

### 14.4 Mejoras de Layout y Aire Visual
Se refinó la estructura visual para un acabado más premium:
- **Contenedor**: Se aumentó el ancho máximo a 1200px para aprovechar mejor escritorios modernos.
- **Espaciado**: Se incrementó la separación entre secciones (`gap: 5rem`) para reducir la carga cognitiva.
- **Padding**: Aplicación de padding consistente y adaptativo en Hero, Proyectos y Contacto.

### 14.5 Refinamiento Estético del HeroSection
Para potenciar la primera impresión, se aplicaron mejoras visuales específicas:
- **Tipografía**: Se aumentó el tamaño del H1 y se ajustó el `line-height` para mayor impacto visual.
- **Badge**: Se añadió un distintivo superior con el stack tecnológico principal.
- **Chips**: Implementación de pequeños identificadores de habilidades (React, Kotlin, IA).
- **Jerarquía en CTAs**: Diferenciación clara entre acción primaria (GitHub) y acciones secundarias (LinkedIn/CV) mediante estilos CSS y efectos de elevación al hover.

### 14.6 Refinamiento de la Sección de Proyectos
Se optimizó la presentación del porfolio para una mayor cohesión visual:
- **Layout**: Uso de `flexbox` para garantizar que todas las tarjetas tengan la misma altura y que los botones de acción se ubiquen siempre en la parte inferior.
- **Estética**: Bordes más finos, radios de curvatura suavizados y sombras de profundidad para un aspecto moderno.
- **Interacción**: Animaciones de transición suave al pasar el cursor sobre las tarjetas.
- **Iconografía CSS**: Uso de selectores de atributos y pseudo-elementos para añadir iconos contextuales a los botones sin librerías externas.

### 14.7 Mejora del Emulador (Showcase Protagonista)
Se elevó el emulador de video a un elemento central del diseño:
- **Visuales**: Inclusión de un gradiente radial suave (efecto spotlight) que destaca el dispositivo sobre el fondo.
- **Dimensiones**: Se aumentó el tamaño relativo en pantallas grandes para mejorar la visibilidad de las demos.
- **Diseño de Hardware**: Adición de un "notch" realista y refinamiento de la sombra paralela del dispositivo.
- **Optimización de Media**: Ajuste de la escala del video (`transform: scale(1.06)`) y uso de `object-fit: cover` para una integración perfecta en el marco del teléfono.

## 15) Conclusión del Proyecto (Release v1.0.0)
El proyecto cumple con los requisitos de la FCT:
- Home 100% funcional y responsive.
- Emulador de alta fidelidad con control de media.
- Calidad técnica validada (0 errores de build/lint).
- Auditado para accesibilidad y SEO.

## Evidencias (portfolio/FCT)
| ID | Hito | Evidencia | Ubicación |
|---|------|-----------|-----------|
| EVID-01 | Home completada | Captura desktop + móvil | docs/evidences/... |
| EVID-02 | Emulador real | Captura reproduciendo + fullscreen | docs/evidences/... |
| EVID-03 | Deploy Vercel | Captura “Congratulations” + URL | docs/evidences/... |
| EVID-04 | Audit Day 3 | Reportes Acc/SEO/Perf | docs/memoria/SPRINT_D3_... |
| EVID-05 | Release Final | Git Tag v1.0.0 | Repositorio GitHub |
