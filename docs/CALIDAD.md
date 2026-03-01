# Estándares de Calidad — Curriculum Web

## Objetivo
Definir gates de calidad reproducibles antes de merge a `main`, con enfoque en:
- accesibilidad
- responsive
- performance razonable
- consistencia de código y documentación

## 1) Filosofía de Cobertura (Pragmática)
### Zona crítica (alta prioridad)
- EmulatorShowcase (PhoneFrame, DemoSwitcher, fullscreen, controles)
- Datos de proyectos/perfil (tipados y consistentes)
- Navegación (anchors o routing)

### Zona estándar
- Secciones UI (Hero, Projects, Skills, Contact)
- Componentes UI reutilizables (Button, Card, Section)

### Zona trivial
- Estilos puros sin lógica
- Contenido estático

## 2) Gates obligatorios pre-merge
Ejecutar:

```bash
npm run typecheck
npm run lint
npm run build
```
