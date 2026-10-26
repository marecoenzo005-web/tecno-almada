# NovaTech Studio — plan de negocio tech + login demo

Web de una sola página con tres partes:

1. **Login de acceso** (cualquier usuario y cualquier contraseña no vacíos).
2. **Panel privado** con el plan de negocio tecnológico: 7 pasos, las 6 reglas clave, una calculadora de ingresos y un checklist con progreso guardado.
3. **Zona Premium** que se desbloquea escribiendo un correo electrónico y muestra las jugadas más potentes y novedosas, un plan de 90 días, ofertas con precios y los KPIs a vigilar.

## Cómo abrirla

- **Doble clic en `index.html`** (funciona sin servidor, sin instalar nada).
- Opcional: si prefieres servirla en local, desde esta carpeta:

  ```bash
  npx serve .
  # o
  python -m http.server 8000
  ```

## Credenciales

No hay credenciales reales: **escribe cualquier usuario y cualquier contraseña**. Lo único obligatorio es que ninguno de los dos esté vacío.

- Con «Mantener sesión iniciada» marcado, la sesión se guarda en `localStorage` (sobrevive al cerrar el navegador).
- Sin marcar, se usa `sessionStorage` (se pierde al cerrar la pestaña).
- El botón **Salir** borra la sesión.

## Qué incluye el panel

- **Resumen** con KPIs del negocio y proyección visual.
- **Paso a paso**: validación del nicho, oferta, legal/fiscal, MVP, primeros clientes, entrega y escalado.
- **Lo más importante**: 6 reglas que deciden el resultado.
- **Números**: calculadora con clientes nuevos, ticket medio y clientes recurrentes (margen y costes ajustables en el código).
- **Checklist de lanzamiento**: 12 tareas con progreso guardado automáticamente y opción de reiniciar.
- **Premium**: bloqueado por correo electrónico. Al introducir un correo válido se desbloquean 8 jugadas de negocio, un plan de 90 días, 6 ofertas con precios y 6 KPIs. Incluye «Usar otro correo» para volver a bloquearlo.
- Botón **Imprimir / PDF** (abre los desplegables antes de imprimir; en Premium hay un botón propio dentro de la zona desbloqueada).
- Diseño responsive, navegación por anclas y respeto por `prefers-reduced-motion`.

## Premium: cómo funciona el acceso por correo

- No hay backend ni envío de correos: la validación es de formato (`usuario@dominio.com`) y se hace en el navegador.
- Al desbloquear, el correo se guarda en `localStorage` bajo la clave `novatech.premium.v1` como `{ email, at }`.
- En la siguiente visita, si la clave existe y el correo guardado es válido, Premium aparece desbloqueado automáticamente (sin confeti ni aviso).
- **Usar otro correo** borra esa clave y vuelve a mostrar el formulario.
- Si el navegador bloquea `localStorage`, Premium queda desbloqueado solo para la visita actual.
- No se envía ningún dato a un servidor; todo ocurre en tu navegador.

## Archivos

```text
index.html   Estructura, login y contenido del plan
styles.css   Diseño, animaciones y responsive
app.js       Login demo, calculadora, checklist, Premium y detalles de UI
```

## Personalización rápida

- **Colores y tipografía**: variables al inicio de `styles.css` (`:root`).
- **Marca y textos**: busca «NovaTech» en `index.html`.
- **Precios de la calculadora**: `RETAINER_PRICE` y `MARGIN` en `app.js`.
- **Tareas del checklist**: array `TASKS` en `app.js`.
- **Contenido Premium**: sección `#premium` en `index.html` (jugadas, plan de 90 días, ofertas y KPIs).
- **Clave del correo Premium**: constante `PREMIUM_KEY` en `app.js` (`novatech.premium.v1`).
- **Mensaje y reglas del login**: manejador de `loginForm` en `app.js`.

## Importante (seguridad)

Este login y el desbloqueo Premium son **solo de interfaz**: se ejecutan en el navegador y cualquiera puede saltarlos leyendo el código o editando `localStorage`. Sirven para una demo o para proteger el acceso visual, **no para datos reales ni contenido de pago**. Para producción necesitas un backend con autenticación real (sesiones o JWT, contraseñas con hash, HTTPS y control de permisos) y validar el correo en el servidor antes de entregar el contenido Premium.
