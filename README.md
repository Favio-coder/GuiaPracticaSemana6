# Aula+ — laboratorio de React

Pequeña SPA de aprendizaje digital hecha con React, React Router y CSS tradicional. La portada presenta cursos de ejemplo; la sección Comunidad consulta usuarios de JSONPlaceholder y el formulario demuestra validación en el cliente y mensajes con SweetAlert2.

## Ejecutar

```bash
npm install
npm run dev
```

Las imágenes del catálogo y la portada se sirven desde Unsplash, y las ilustraciones de perfil desde DiceBear; se requiere conexión a internet para verlas. Los cursos son contenido de demostración. El formulario valida y muestra confirmación, pero no crea cuentas ni envía datos a un servidor.

## Rutas

- `/`: portada y catálogo de cursos.
- `/list`: comunidad y tarjetas de usuarios (también disponible en `/usuarios`).
- `/formulario`: registro de demostración.

React Router cambia la vista sin solicitar un documento HTML nuevo. Vite entrega la SPA inicialmente; a partir de ahí, el router selecciona los componentes correspondientes a cada URL.

## Estilos — Fase 11

Se utiliza CSS tradicional: variables globales en `src/index.css` y estilos de componentes/responsive en `src/App.css`. La interfaz usa una paleta verde y oscura, tarjetas de cursos y usuarios, formularios y estados visuales de carga/error. `NavLink` aplica la clase `active` para indicar la ruta actual. SweetAlert2 presenta los errores de carga de la comunidad y los resultados de validación del formulario.

## Renderizado en cliente y ciclo de vida — Fase 12

En `/list` (o `/usuarios`) sucede lo siguiente:

1. React monta `List`; su primer render muestra el estado inicial `loading`.
2. Tras ese render, `useEffect` crea un `AbortController` y solicita los usuarios.
3. Mientras llega la respuesta, React muestra el componente de carga.
4. Cuando la petición termina, `setUsers` actualiza el estado; React vuelve a renderizar `List` y muestra las tarjetas.
5. Si la solicitud falla, se actualiza el estado de error, SweetAlert2 ofrece reintentar y la vista conserva un mensaje de error con una acción para volver a intentar.
6. Al abandonar la ruta, React ejecuta la función de cleanup del efecto. Esta aborta la petición pendiente para evitar trabajo innecesario y actualizaciones del componente desmontado. Una respuesta abortada no se presenta como un error al usuario.

El efecto también vuelve a ejecutarse cuando cambia el contador de reintentos. Cada ejecución crea su propio controlador y su cleanup cancela únicamente la petición de esa ejecución.

## React Strict Mode — Fase 13

La aplicación está envuelta en `<StrictMode>` en `src/main.jsx`; no se desactiva para ocultar ejecuciones adicionales. En desarrollo, React puede ejecutar un ciclo adicional de preparación y cleanup de efectos para detectar efectos que no limpian correctamente. Por eso se puede observar más de una petición al entrar en `/list`. La primera puede aparecer cancelada por el cleanup; la siguiente corresponde al efecto activo.

**Desarrollo ≠ producción.** Esta comprobación adicional de Strict Mode es propia del desarrollo. Para observar el comportamiento de producción, ejecutar `npm run build` y después `npm run preview`. En las herramientas del navegador, abrir **Network/Red**, filtrar por **Fetch/XHR** y observar las solicitudes a `jsonplaceholder.typicode.com/users`, distinguiendo las canceladas de las que completan.
