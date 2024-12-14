# Proyecto de Modal Animado en React Native

Este proyecto es una implementación de un componente de modal animado utilizando React Native. Contiene tres componentes principales: `App`, `Card` y `Modal`. A continuación, se describe la funcionalidad y estructura del proyecto.

## Descripción de los Componentes

### 1. Componente `App`
Este es el componente principal de la aplicación que:
- Renderiza un botón para abrir el modal.
- Maneja la visibilidad del modal mediante el estado local (`visibility`).
- Incluye un pie de página con información adicional.

#### Características
- **Botón:** Abre el modal al ser presionado.
- **Modal:** Se puede cerrar tocando fuera de su contenido si es descartable.

### 2. Componente `Card`
Este componente representa el contenido del modal. Contiene:
- Texto con ofertas.
- Campos simulados para capturar información como un correo electrónico.
- Botones interactivos, como "Obtener descuento" o "No, gracias".

#### Estructura
- Título principal de oferta.
- Mensaje adicional sobre la compra.
- Campo de entrada de correo (simulado).
- Botones interactivos para confirmar o rechazar la oferta.

### 3. Componente `Modal`
Este componente se encarga de mostrar un modal animado que aparece y desaparece con transiciones suaves.

#### Características
- **Animaciones:**
  - Fondo que se oscurece gradualmente.
  - Contenido que se desliza desde la parte inferior.
  - Escalado del contenido para un efecto visual atractivo.
- **Dimensiones dinámicas:** Calculadas en base al tamaño de la ventana del dispositivo.
- **Cierre:** Se puede cerrar tocando fuera del modal si es descartable.


## Uso del Proyecto

1. Al iniciar la aplicación, verás un botón "Abrir Modal".
2. Al presionar el botón, el modal animado aparecerá desde la parte inferior.
3. El contenido del modal incluye:
   - Un mensaje de oferta.
   - Un campo simulado para capturar el correo electrónico.
   - Botones para aceptar o rechazar la oferta.
4. Puedes cerrar el modal tocando fuera de su contenido (si es descartable) o pulsando "No, gracias".

## Personalización

- **Colores:** Cambia los colores de fondo o texto en los estilos de los componentes (`styles` en cada archivo).
- **Animaciones:** Ajusta la duración de las animaciones en el método `Animated.timing` del componente `Modal`.
- **Contenido del Modal:** Personaliza el componente `Card` para adaptarlo a tus necesidades.

## Estructura del Proyecto

```
├── App.js
├── src
│   ├── components
│   │   ├── Card.js
│   │   ├── Modal.js
├── package.json
```

## Dependencias
- **React Native:** Framework principal para el desarrollo de la aplicación.
- **Animated:** API de React Native utilizada para las animaciones.

## Mejoras Futuras
- Agregar soporte para múltiples tamaños de dispositivos.
- Implementar validación real para el campo de correo electrónico.
- Añadir una funcionalidad para cambiar el idioma del contenido.

## Autor
Diego Berrio (@Diegoberrio1601)
