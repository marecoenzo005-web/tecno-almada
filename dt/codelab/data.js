/* CodeLab · contenido del curso
   Todo el temario, los ejercicios y los retos viven aquí.
   No hay dependencias externas. */

window.CODELAB = {
  levels: ['Básico', 'Intermedio', 'Avanzado'],

  tracks: [
    /* ============================================================
       HTML
       ============================================================ */
    {
      id: 'html',
      name: 'HTML',
      title: 'Estructura con HTML',
      icon: 'html',
      color: '#e34f26',
      tagline: 'La base de toda página web',
      description: 'Aprende a ordenar contenido con etiquetas semánticas, enlaces, formularios y tablas accesibles.',
      lessons: [
        {
          id: 'html-01',
          title: 'Tu primera página',
          level: 'Básico',
          minutes: 8,
          xp: 40,
          summary: 'Crea un título y un párrafo, y entiende cómo se abren y cierran las etiquetas.',
          learn: [
            'Qué es una etiqueta y cómo se cierra',
            'La diferencia entre un título y un párrafo',
            'Cómo escribir comentarios en HTML'
          ],
          theory: `
            <p>HTML describe la <strong>estructura</strong> de una página: qué es un título, qué es un párrafo y qué es un enlace. El navegador lee esas etiquetas y construye el contenido.</p>
            <p>Una etiqueta se abre y se cierra. El texto vive entre ambas:</p>
            <pre><code>&lt;h1&gt;Hola, mundo&lt;/h1&gt;
&lt;p&gt;Mi primera página.&lt;/p&gt;</code></pre>
            <p><code>&lt;h1&gt;</code> es el título principal y solo debería haber uno por página. <code>&lt;p&gt;</code> agrupa un párrafo. Los comentarios <code>&lt;!-- así --&gt;</code> no se ven en pantalla y sirven para dejar notas.</p>
          `,
          task: 'Escribe un <h1> que diga exactamente «Hola, mundo» y un <p> con una frase sobre ti de al menos 10 caracteres.',
          hint: 'Abre y cierra cada etiqueta. El texto va entre la apertura y el cierre: <h1>tu texto</h1>.',
          type: 'code',
          language: 'html',
          starter: '<!-- Escribe tu HTML aquí -->\n',
          solution: '<h1>Hola, mundo</h1>\n<p>Estoy aprendiendo a programar desde el navegador.</p>',
          checks: [
            { label: 'Existe un <h1>', kind: 'dom', selector: 'h1' },
            { label: 'El <h1> dice «Hola, mundo»', kind: 'dom', selector: 'h1', text: 'Hola, mundo', mode: 'equals' },
            { label: 'Existe un <p> con al menos 10 caracteres', kind: 'dom', selector: 'p', mode: 'minLength', length: 10 }
          ]
        },
        {
          id: 'html-02',
          title: 'Enlaces e imágenes',
          level: 'Básico',
          minutes: 9,
          xp: 40,
          summary: 'Conecta páginas con enlaces y describe imágenes con texto alternativo.',
          learn: [
            'Cómo funcionan los atributos href y target',
            'Por qué el atributo alt es obligatorio en la práctica',
            'Cómo abrir un enlace de forma segura en otra pestaña'
          ],
          theory: `
            <p>Los enlaces usan <code>&lt;a&gt;</code> y su atributo <code>href</code> indica el destino. <code>target="_blank"</code> abre una pestaña nueva y <code>rel="noopener"</code> evita que la página nueva pueda manipular la original.</p>
            <p>Las imágenes usan <code>&lt;img&gt;</code> y no tienen cierre. <code>src</code> apunta al archivo y <code>alt</code> describe la imagen para quien no puede verla. Un <code>alt</code> vacío solo es válido si la imagen es decorativa.</p>
          `,
          task: 'Crea un enlace a https://developer.mozilla.org que diga «Documentación», se abra en otra pestaña y use rel="noopener". Debajo, añade una imagen con src="https://placehold.co/480x240" y un alt que mencione «código».',
          hint: 'El enlace necesita tres atributos: href, target y rel. La imagen necesita src y alt.',
          type: 'code',
          language: 'html',
          starter: '<!-- Enlace -->\n\n<!-- Imagen -->\n',
          solution: '<a href="https://developer.mozilla.org" target="_blank" rel="noopener">Documentación</a>\n\n<img src="https://placehold.co/480x240" alt="Panel de código en la pantalla">',
          checks: [
            { label: 'Existe un enlace', kind: 'dom', selector: 'a' },
            { label: 'El enlace apunta a developer.mozilla.org', kind: 'dom', selector: 'a', attr: 'href', equals: 'https://developer.mozilla.org' },
            { label: 'El enlace dice «Documentación»', kind: 'dom', selector: 'a', text: 'Documentación', mode: 'equals' },
            { label: 'El enlace se abre en otra pestaña', kind: 'dom', selector: 'a', attr: 'target', equals: '_blank' },
            { label: 'El enlace incluye rel="noopener"', kind: 'dom', selector: 'a', attr: 'rel', mode: 'includes', equals: 'noopener' },
            { label: 'Existe una imagen', kind: 'dom', selector: 'img' },
            { label: 'La imagen usa el src indicado', kind: 'dom', selector: 'img', attr: 'src', equals: 'https://placehold.co/480x240' },
            { label: 'El alt de la imagen menciona «código»', kind: 'dom', selector: 'img', attr: 'alt', mode: 'includes', equals: 'código' }
          ]
        },
        {
          id: 'html-03',
          title: 'Listas y estructura semántica',
          level: 'Intermedio',
          minutes: 10,
          xp: 50,
          summary: 'Organiza una página con header, main y section, y crea listas limpias.',
          learn: [
            'Para qué sirven header, main y section',
            'Cómo construir listas con ul y li',
            'Por qué la semántica mejora la accesibilidad'
          ],
          theory: `
            <p>Etiquetas como <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> y <code>&lt;footer&gt;</code> no cambian el aspecto, pero describen la función de cada zona. Eso ayuda a lectores de pantalla y a los buscadores.</p>
            <p>Una lista no ordenada se crea con <code>&lt;ul&gt;</code> y cada elemento con <code>&lt;li&gt;</code>. Cada página debe tener un solo <code>&lt;main&gt;</code>, porque es el contenido principal.</p>
          `,
          task: 'Construye una página con un <header> que contenga un <h1> «Mi ruta de aprendizaje», un <main> con una <section>, un <h2> «Tecnologías» y una lista <ul> con exactamente tres <li>: HTML, CSS y JavaScript.',
          hint: 'Dentro de <main> va la <section>. Dentro de la sección, el <h2> y la lista.',
          type: 'code',
          language: 'html',
          starter: '<header>\n\n</header>\n\n<main>\n\n</main>\n',
          solution: '<header>\n  <h1>Mi ruta de aprendizaje</h1>\n</header>\n<main>\n  <section>\n    <h2>Tecnologías</h2>\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </section>\n</main>',
          checks: [
            { label: 'Hay un <header> con el <h1>', kind: 'dom', selector: 'header h1', text: 'Mi ruta de aprendizaje', mode: 'equals' },
            { label: 'Hay un <main>', kind: 'dom', selector: 'main' },
            { label: 'El <main> contiene una <section>', kind: 'dom', selector: 'main section' },
            { label: 'Existe el <h2> «Tecnologías»', kind: 'dom', selector: 'main h2', text: 'Tecnologías', mode: 'equals' },
            { label: 'La lista tiene exactamente 3 elementos', kind: 'dom', selector: 'main ul li', count: 3 }
          ]
        },
        {
          id: 'html-04',
          title: 'Formularios accesibles',
          level: 'Intermedio',
          minutes: 12,
          xp: 50,
          summary: 'Asocia etiquetas y campos, activa validaciones y crea un selector de opciones.',
          learn: [
            'Cómo conectar un label con su input',
            'Qué aportan los tipos de input y required',
            'Cómo construir un select con opciones'
          ],
          theory: `
            <p>Un formulario accesible asocia cada campo con su etiqueta. La forma más robusta es <code>&lt;label for="email"&gt;</code> junto a un <code>&lt;input id="email"&gt;</code>: al hacer clic en el texto, el foco va al campo.</p>
            <p>El atributo <code>type</code> activa teclados y validaciones del navegador (<code>email</code>, <code>number</code>, <code>date</code>...). <code>required</code> impide enviar el formulario vacío.</p>
          `,
          task: 'Crea un formulario con: un label para "email", un input id="email" de tipo email y obligatorio; un label para "plan", un select id="plan" con al menos dos opciones; y un botón de tipo submit que diga «Enviar».',
          hint: 'El valor de for en el label debe coincidir exactamente con el id del campo.',
          type: 'code',
          language: 'html',
          starter: '<form>\n  <!-- Campo de correo -->\n\n  <!-- Selector de plan -->\n\n  <button type="submit">...</button>\n</form>',
          solution: '<form>\n  <label for="email">Correo electrónico</label>\n  <input id="email" name="email" type="email" required>\n\n  <label for="plan">Plan</label>\n  <select id="plan" name="plan">\n    <option value="mensual">Mensual</option>\n    <option value="anual">Anual</option>\n  </select>\n\n  <button type="submit">Enviar</button>\n</form>',
          checks: [
            { label: 'El label apunta al campo de correo', kind: 'dom', selector: 'label[for="email"]' },
            { label: 'Existe el input#email', kind: 'dom', selector: 'input#email' },
            { label: 'El campo es de tipo email', kind: 'dom', selector: 'input#email', attr: 'type', equals: 'email' },
            { label: 'El campo de correo es obligatorio', kind: 'dom', selector: 'input#email', attr: 'required', mode: 'exists' },
            { label: 'El label apunta al selector de plan', kind: 'dom', selector: 'label[for="plan"]' },
            { label: 'El select#plan tiene al menos 2 opciones', kind: 'dom', selector: 'select#plan option', countMin: 2 },
            { label: 'El botón envía el formulario y dice «Enviar»', kind: 'dom', selector: 'button[type="submit"]', text: 'Enviar', mode: 'equals' }
          ]
        },
        {
          id: 'html-05',
          title: 'Tablas de datos',
          level: 'Avanzado',
          minutes: 12,
          xp: 60,
          summary: 'Presenta datos tabulares con caption, cabeceras y filas bien separadas.',
          learn: [
            'La estructura table, thead, tbody y tr',
            'Cómo marcar cabeceras con th y scope',
            'Por qué una tabla no sirve para maquetar'
          ],
          theory: `
            <p>Usa una tabla solo para datos que se relacionan en filas y columnas. <code>&lt;caption&gt;</code> le da un título accesible y <code>&lt;th scope="col"&gt;</code> indica que una celda es cabecera de columna.</p>
            <p><code>&lt;thead&gt;</code> agrupa las cabeceras y <code>&lt;tbody&gt;</code> las filas de datos. Esa separación ayuda a lectores de pantalla y a imprimir la tabla.</p>
          `,
          task: 'Crea una tabla con caption «Notas del trimestre», dos columnas («Materia» y «Nota») con th scope="col", y tres filas: HTML 9, CSS 8 y JavaScript 10.',
          hint: 'Cada fila de datos va dentro de <tbody>, y cada celda normal usa <td>.',
          type: 'code',
          language: 'html',
          starter: '<table>\n  <!-- Título y cabeceras -->\n\n  <!-- Filas -->\n</table>',
          solution: '<table>\n  <caption>Notas del trimestre</caption>\n  <thead>\n    <tr>\n      <th scope="col">Materia</th>\n      <th scope="col">Nota</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>HTML</td><td>9</td></tr>\n    <tr><td>CSS</td><td>8</td></tr>\n    <tr><td>JavaScript</td><td>10</td></tr>\n  </tbody>\n</table>',
          checks: [
            { label: 'Existe la tabla', kind: 'dom', selector: 'table' },
            { label: 'El caption menciona «Notas»', kind: 'dom', selector: 'caption', text: 'Notas', mode: 'includes' },
            { label: 'Hay 2 cabeceras de columna', kind: 'dom', selector: 'thead th[scope="col"]', count: 2 },
            { label: 'Hay 3 filas de datos', kind: 'dom', selector: 'tbody tr', count: 3 },
            { label: 'La primera fila es HTML 9', kind: 'dom', selector: 'tbody tr:first-child td:first-child', text: 'HTML', mode: 'equals' },
            { label: 'La nota de HTML es 9', kind: 'dom', selector: 'tbody tr:first-child td:last-child', text: '9', mode: 'equals' }
          ]
        },
        {
          id: 'html-06',
          title: 'Mini página accesible',
          level: 'Avanzado',
          minutes: 15,
          xp: 70,
          summary: 'Combina landmarks, navegación, article, figure y footer en una sola página.',
          learn: [
            'Cómo declarar zonas con landmarks',
            'Cuándo usar article y figure',
            'Cómo nombrar una navegación con aria-label'
          ],
          theory: `
            <p>Los <strong>landmarks</strong> son zonas con significado: <code>header</code>, <code>nav</code>, <code>main</code> y <code>footer</code>. Si hay más de una navegación, <code>aria-label</code> le da un nombre distinto a cada una.</p>
            <p>Un <code>article</code> tiene sentido por sí solo. Una <code>figure</code> agrupa una imagen con su <code>figcaption</code>, de modo que la descripción queda unida al contenido.</p>
          `,
          task: 'Arma una mini página: un <header> con un <nav aria-label="Principal"> y dos enlaces; un <main> con un <article> que tenga un <h2>, una <figure> con una imagen con alt y un <figcaption>; y un <footer> con un <small>. La imagen puede ser https://placehold.co/640x360.',
          hint: 'El alt describe la imagen; el figcaption añade contexto visible debajo. No repitas la misma frase en ambos.',
          type: 'code',
          language: 'html',
          starter: '<header>\n  <nav aria-label="Principal">\n\n  </nav>\n</header>\n<main>\n  <article>\n\n  </article>\n</main>\n<footer>\n\n</footer>',
          solution: '<header>\n  <nav aria-label="Principal">\n    <a href="#inicio">Inicio</a>\n    <a href="#contacto">Contacto</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Mi primer proyecto</h2>\n    <figure>\n      <img src="https://placehold.co/640x360" alt="Captura de una página web sencilla">\n      <figcaption>La página que construí en CodeLab.</figcaption>\n    </figure>\n  </article>\n</main>\n<footer>\n  <small>Hecho con HTML y curiosidad.</small>\n</footer>',
          checks: [
            { label: 'La navegación tiene aria-label="Principal"', kind: 'dom', selector: 'nav[aria-label="Principal"]' },
            { label: 'La navegación tiene 2 enlaces', kind: 'dom', selector: 'nav a', count: 2 },
            { label: 'Hay un article con un <h2>', kind: 'dom', selector: 'main article h2' },
            { label: 'La figure contiene una imagen con alt', kind: 'dom', selector: 'figure img', attr: 'alt', mode: 'nonEmpty' },
            { label: 'La figure tiene figcaption', kind: 'dom', selector: 'figure figcaption', mode: 'minLength', length: 3 },
            { label: 'El footer incluye un <small>', kind: 'dom', selector: 'footer small' }
          ]
        }
      ]
    },

    /* ============================================================
       CSS
       ============================================================ */
    {
      id: 'css',
      name: 'CSS',
      title: 'Diseño con CSS',
      icon: 'css',
      color: '#2965f1',
      tagline: 'Del papel en blanco a una interfaz',
      description: 'Domina selectores, el modelo de caja, Flexbox, Grid, variables y animaciones con proyectos pequeños.',
      lessons: [
        {
          id: 'css-01',
          title: 'Selectores y color',
          level: 'Básico',
          minutes: 8,
          xp: 40,
          summary: 'Estiliza una etiqueta con clase, color, relleno y bordes redondeados.',
          learn: [
            'Cómo apuntar a una clase con el selector .clase',
            'La diferencia entre color y background',
            'Cómo usar padding y border-radius'
          ],
          theory: `
            <p>En CSS, el selector <code>.badge</code> elige todos los elementos con <code>class="badge"</code>. Dentro de las llaves van las declaraciones: <code>propiedad: valor;</code>.</p>
            <p><code>color</code> cambia el texto y <code>background</code> el fondo. <code>padding</code> añade espacio interior y <code>border-radius</code> redondea las esquinas. Un valor de <code>999px</code> convierte una caja en una píldora.</p>
          `,
          task: 'Estiliza .badge con fondo #2563eb, texto blanco, padding de 6px 12px, border-radius de 999px, font-weight 700 y display inline-block.',
          hint: 'Escribe el selector, abre llaves y cierra cada declaración con punto y coma.',
          type: 'code',
          language: 'css',
          fixture: '<div class="card"><span class="badge">Nuevo</span><h2>Curso de CSS</h2><p>Aprende a dar estilo a tus proyectos.</p></div>',
          starter: '/* Estiliza la etiqueta .badge */\n.badge {\n\n}\n',
          solution: '.badge {\n  display: inline-block;\n  background: #2563eb;\n  color: #ffffff;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-weight: 700;\n}',
          checks: [
            { label: 'El badge tiene fondo azul', kind: 'style', selector: '.badge', property: 'background-color', equals: 'rgb(37, 99, 235)' },
            { label: 'El texto es blanco', kind: 'style', selector: '.badge', property: 'color', equals: 'rgb(255, 255, 255)' },
            { label: 'El padding es 6px 12px', kind: 'style', selector: '.badge', property: 'padding', equals: '6px 12px' },
            { label: 'Las esquinas están redondeadas', kind: 'style', selector: '.badge', property: 'border-radius', equals: '999px' },
            { label: 'El texto está en negrita', kind: 'style', selector: '.badge', property: 'font-weight', equals: '700' },
            { label: 'El badge se comporta como inline-block', kind: 'style', selector: '.badge', property: 'display', equals: 'inline-block' }
          ]
        },
        {
          id: 'css-02',
          title: 'El modelo de caja',
          level: 'Básico',
          minutes: 9,
          xp: 40,
          summary: 'Controla ancho, relleno, borde y box-sizing sin romper el diseño.',
          learn: [
            'Qué son content, padding, border y margin',
            'Cómo funciona box-sizing: border-box',
            'Cómo crear una tarjeta con medidas predecibles'
          ],
          theory: `
            <p>Cada elemento es una caja con cuatro capas: contenido, <code>padding</code>, <code>border</code> y <code>margin</code>. Por defecto, el ancho solo cuenta el contenido y el padding se suma.</p>
            <p><code>box-sizing: border-box</code> hace que el ancho incluya padding y borde. Es la opción más predecible y suele aplicarse a todos los elementos.</p>
          `,
          task: 'Crea .card con width 320px, padding 24px, fondo #ffffff, borde de 2px sólido #14161a, border-radius 16px y box-sizing border-box.',
          hint: 'El borde necesita tres valores: grosor, estilo y color.',
          type: 'code',
          language: 'css',
          fixture: '<div class="card"><h2>Plan Pro</h2><p>Todo lo que necesitas para empezar.</p></div>',
          starter: '.card {\n\n}\n',
          solution: '.card {\n  box-sizing: border-box;\n  width: 320px;\n  padding: 24px;\n  background: #ffffff;\n  border: 2px solid #14161a;\n  border-radius: 16px;\n}',
          checks: [
            { label: 'La tarjeta mide 320px de ancho', kind: 'style', selector: '.card', property: 'width', equals: '320px' },
            { label: 'El padding es de 24px', kind: 'style', selector: '.card', property: 'padding', equals: '24px' },
            { label: 'El borde mide 2px y es sólido', kind: 'style', selector: '.card', property: 'border', equals: '2px solid rgb(20, 22, 26)' },
            { label: 'Las esquinas tienen 16px', kind: 'style', selector: '.card', property: 'border-radius', equals: '16px' },
            { label: 'box-sizing es border-box', kind: 'style', selector: '.card', property: 'box-sizing', equals: 'border-box' },
            { label: 'El fondo es blanco', kind: 'style', selector: '.card', property: 'background-color', equals: 'rgb(255, 255, 255)' }
          ]
        },
        {
          id: 'css-03',
          title: 'Flexbox en una fila',
          level: 'Intermedio',
          minutes: 10,
          xp: 50,
          summary: 'Alinea y distribuye elementos con display flex, gap y space-between.',
          learn: [
            'Cómo activar Flexbox con display: flex',
            'La diferencia entre justify-content y align-items',
            'Cómo separar elementos con gap'
          ],
          theory: `
            <p><code>display: flex</code> convierte los hijos directos en elementos flexibles. <code>justify-content</code> distribuye a lo largo del eje principal y <code>align-items</code> alinea en el eje cruzado.</p>
            <p><code>gap</code> separa los elementos sin usar márgenes. <code>space-between</code> empuja el primero y el último a los extremos.</p>
          `,
          task: 'Estiliza .row con display flex, justify-content space-between, align-items center, padding 18px 24px, fondo #14161a, color blanco y border-radius 14px. Haz que .links sea flex con gap 14px y que sus enlaces hereden el color sin subrayado.',
          hint: 'Para los enlaces, usa .links a { color: inherit; text-decoration: none; }.',
          type: 'code',
          language: 'css',
          fixture: '<div class="row"><span class="brand">CodeLab</span><div class="links"><a href="#/">Lecciones</a><a href="#/">Retos</a><a href="#/">Progreso</a></div></div>',
          starter: '.row {\n\n}\n\n.links {\n\n}\n',
          solution: '.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 24px;\n  background: #14161a;\n  color: #ffffff;\n  border-radius: 14px;\n}\n\n.links {\n  display: flex;\n  gap: 14px;\n}\n\n.links a {\n  color: inherit;\n  text-decoration: none;\n}',
          checks: [
            { label: '.row usa Flexbox', kind: 'style', selector: '.row', property: 'display', equals: 'flex' },
            { label: 'El contenido se separa a los extremos', kind: 'style', selector: '.row', property: 'justify-content', equals: 'space-between' },
            { label: 'Los elementos se alinean al centro', kind: 'style', selector: '.row', property: 'align-items', equals: 'center' },
            { label: 'El padding es 18px 24px', kind: 'style', selector: '.row', property: 'padding', equals: '18px 24px' },
            { label: 'El fondo es oscuro', kind: 'style', selector: '.row', property: 'background-color', equals: 'rgb(20, 22, 26)' },
            { label: 'Los enlaces usan Flexbox', kind: 'style', selector: '.links', property: 'display', equals: 'flex' },
            { label: 'Hay 14px entre enlaces', kind: 'style', selector: '.links', property: 'gap', equals: '14px' }
          ]
        },
        {
          id: 'css-04',
          title: 'Grid que se adapta',
          level: 'Intermedio',
          minutes: 12,
          xp: 50,
          summary: 'Crea una cuadrícula de tres columnas y conviértela en una sola en móvil.',
          learn: [
            'Cómo definir columnas con grid-template-columns',
            'Cómo usar gap en una cuadrícula',
            'Cómo escribir una media query de ancho'
          ],
          theory: `
            <p><code>display: grid</code> organiza los hijos en filas y columnas. <code>repeat(3, 1fr)</code> crea tres columnas iguales que se reparten el espacio.</p>
            <p>Una <strong>media query</strong> aplica estilos solo cuando se cumple una condición: <code>@media (max-width: 640px) { ... }</code> se activa en pantallas de 640px o menos.</p>
          `,
          task: 'Crea .grid con display grid, tres columnas iguales y gap 14px. Estiliza .tile con fondo blanco, borde 1px sólido #e3ddd0, padding 24px, border-radius 12px y texto centrado. En pantallas de 640px o menos, deja una sola columna.',
          hint: 'La media query va después de las reglas normales. Dentro, cambia grid-template-columns a 1fr.',
          type: 'code',
          language: 'css',
          fixture: '<section class="grid"><article class="tile">01</article><article class="tile">02</article><article class="tile">03</article><article class="tile">04</article><article class="tile">05</article><article class="tile">06</article></section>',
          starter: '.grid {\n\n}\n\n.tile {\n\n}\n',
          solution: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n\n.tile {\n  background: #ffffff;\n  border: 1px solid #e3ddd0;\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n}\n\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}',
          checks: [
            { label: 'La cuadrícula usa Grid', kind: 'style', selector: '.grid', property: 'display', equals: 'grid' },
            { label: 'En escritorio hay 3 columnas', kind: 'style', selector: '.grid', property: 'grid-template-columns', atWidth: 900, test: 'tracks', tracks: 3 },
            { label: 'En móvil hay 1 columna', kind: 'style', selector: '.grid', property: 'grid-template-columns', atWidth: 360, test: 'tracks', tracks: 1 },
            { label: 'La separación es de 14px', kind: 'style', selector: '.grid', property: 'gap', equals: '14px' },
            { label: 'Las tarjetas tienen fondo blanco', kind: 'style', selector: '.tile', property: 'background-color', equals: 'rgb(255, 255, 255)' },
            { label: 'Las tarjetas tienen esquinas de 12px', kind: 'style', selector: '.tile', property: 'border-radius', equals: '12px' }
          ]
        },
        {
          id: 'css-05',
          title: 'Variables y estados',
          level: 'Avanzado',
          minutes: 12,
          xp: 60,
          summary: 'Centraliza colores con custom properties y crea un botón con variante fantasma.',
          learn: [
            'Cómo declarar variables en :root',
            'Cómo reutilizarlas con var()',
            'Cómo crear una variante con una clase modificadora'
          ],
          theory: `
            <p>Las <strong>custom properties</strong> guardan valores reutilizables: <code>:root { --brand: #16a34a; }</code>. Luego se usan con <code>var(--brand)</code>.</p>
            <p>Una clase modificadora como <code>.btn--ghost</code> comparte la base de <code>.btn</code> y cambia solo lo necesario. Así evitas duplicar estilos.</p>
          `,
          task: 'Declara --brand: #16a34a en :root. Crea .btn con fondo var(--brand), texto blanco, padding 12px 20px, border-radius 10px y sin borde. Crea .btn--ghost con fondo transparente, color var(--brand) y borde sólido de 2px del mismo color.',
          hint: 'Puedes usar var(--brand) también dentro del borde: border: 2px solid var(--brand).',
          type: 'code',
          language: 'css',
          fixture: '<button class="btn">Guardar cambios</button> <button class="btn btn--ghost">Cancelar</button>',
          starter: ':root {\n\n}\n\n.btn {\n\n}\n\n.btn--ghost {\n\n}\n',
          solution: ':root {\n  --brand: #16a34a;\n}\n\n.btn {\n  background: var(--brand);\n  color: #ffffff;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.btn--ghost {\n  background: transparent;\n  color: var(--brand);\n  border: 2px solid var(--brand);\n}',
          checks: [
            { label: 'La variable --brand vale #16a34a', kind: 'style', selector: ':root', property: '--brand', equals: '#16a34a' },
            { label: 'El botón usa el color de marca', kind: 'style', selector: '.btn', property: 'background-color', equals: 'rgb(22, 163, 74)' },
            { label: 'El texto del botón es blanco', kind: 'style', selector: '.btn', property: 'color', equals: 'rgb(255, 255, 255)' },
            { label: 'El padding es 12px 20px', kind: 'style', selector: '.btn', property: 'padding', equals: '12px 20px' },
            { label: 'La variante fantasma no tiene fondo', kind: 'style', selector: '.btn--ghost', property: 'background-color', equals: 'rgba(0, 0, 0, 0)' },
            { label: 'La variante fantasma tiene borde de 2px', kind: 'style', selector: '.btn--ghost', property: 'border-top-width', equals: '2px' }
          ]
        },
        {
          id: 'css-06',
          title: 'Animación con keyframes',
          level: 'Avanzado',
          minutes: 14,
          xp: 70,
          summary: 'Crea un indicador vivo con una animación infinita y una sombra que respira.',
          learn: [
            'Cómo definir fotogramas con @keyframes',
            'Cómo aplicar una animación con animation',
            'Cómo evitar animaciones molestas con prefers-reduced-motion'
          ],
          theory: `
            <p>Una animación se define con <code>@keyframes nombre</code> y estados en porcentaje. Después se aplica con la propiedad <code>animation</code>: nombre, duración, curva y repeticiones.</p>
            <p>No todas las personas toleran el movimiento. Con <code>@media (prefers-reduced-motion: reduce)</code> puedes desactivar o acortar animaciones.</p>
          `,
          task: 'Define @keyframes pulse con una sombra que crece y se desvanece. Aplica a .pulse fondo #14161a, texto #c9f24d, padding 16px 22px, border-radius 12px y la animación pulse de 1.8s infinita.',
          hint: 'La animación necesita que el nombre coincida exactamente con el de @keyframes. Prueba animation: pulse 1.8s infinite;',
          type: 'code',
          language: 'css',
          fixture: '<div class="pulse">En vivo</div>',
          starter: '@keyframes pulse {\n\n}\n\n.pulse {\n\n}\n',
          solution: '@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(201, 242, 77, 0.6);\n  }\n  70% {\n    box-shadow: 0 0 0 16px rgba(201, 242, 77, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(201, 242, 77, 0);\n  }\n}\n\n.pulse {\n  display: inline-block;\n  background: #14161a;\n  color: #c9f24d;\n  padding: 16px 22px;\n  border-radius: 12px;\n  animation: pulse 1.8s infinite;\n}',
          checks: [
            { label: 'La animación se llama pulse', kind: 'style', selector: '.pulse', property: 'animation-name', equals: 'pulse' },
            { label: 'La animación dura 1.8s', kind: 'style', selector: '.pulse', property: 'animation-duration', equals: '1.8s' },
            { label: 'La animación se repite infinitamente', kind: 'style', selector: '.pulse', property: 'animation-iteration-count', equals: 'infinite' },
            { label: 'El fondo es oscuro', kind: 'style', selector: '.pulse', property: 'background-color', equals: 'rgb(20, 22, 26)' },
            { label: 'El texto es lima', kind: 'style', selector: '.pulse', property: 'color', equals: 'rgb(201, 242, 77)' },
            { label: 'Las esquinas tienen 12px', kind: 'style', selector: '.pulse', property: 'border-radius', equals: '12px' }
          ]
        }
      ]
    },

    /* ============================================================
       JAVASCRIPT
       ============================================================ */
    {
      id: 'js',
      name: 'JavaScript',
      title: 'Lógica con JavaScript',
      icon: 'js',
      color: '#b7791f',
      tagline: 'Haz que las páginas piensen',
      description: 'Variables, condiciones, arrays, funciones y DOM: la lógica que convierte una página en una aplicación.',
      lessons: [
        {
          id: 'js-01',
          title: 'Variables y salida',
          level: 'Básico',
          minutes: 8,
          xp: 40,
          summary: 'Declara una constante y muestra un mensaje en la consola.',
          learn: [
            'Para qué sirven const y let',
            'Cómo unir texto con el operador +',
            'Cómo leer la consola del navegador'
          ],
          theory: `
            <p><code>const</code> declara un valor que no se reasigna; <code>let</code> permite cambiarlo. Usa <code>const</code> por defecto y <code>let</code> solo cuando lo necesites.</p>
            <p><code>console.log()</code> escribe en la consola. Es la herramienta más directa para comprobar qué está haciendo tu código.</p>
          `,
          task: 'Declara una constante nombre con el valor "Ada" y muestra en la consola exactamente: Hola, Ada',
          hint: 'Puedes unir dos textos con +: "Hola, " + nombre.',
          type: 'code',
          language: 'js',
          starter: 'const nombre = "Ada";\n// Muestra el saludo en la consola\n',
          solution: 'const nombre = "Ada";\nconsole.log("Hola, " + nombre);',
          checks: [
            { label: 'La consola muestra «Hola, Ada»', kind: 'logs', expected: ['Hola, Ada'] },
            { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
          ]
        },
        {
          id: 'js-02',
          title: 'Operaciones y plantillas',
          level: 'Básico',
          minutes: 9,
          xp: 40,
          summary: 'Calcula un total con IVA y muéstralo con un template literal.',
          learn: [
            'Operadores aritméticos y precedencia',
            'Cómo interpolar valores con template literals',
            'Cómo comprobar resultados en la consola'
          ],
          theory: `
            <p>Los template literals usan acentos graves y permiten insertar expresiones entre llaves. Por ejemplo: <code>const saludo = \`Hola, \${nombre}\`;</code>.</p>
            <p>La multiplicación se resuelve antes que la suma. Si quieres agrupar, usa paréntesis. Para un total con IVA, multiplica por <code>1 + iva</code>.</p>
          `,
          task: 'Declara precio = 120 e iva = 0.25, calcula el total y muestra exactamente «Total: 150» usando un template literal.',
          hint: 'El total se calcula con precio * (1 + iva). Recuerda los acentos graves y ${...}.',
          type: 'code',
          language: 'js',
          starter: 'const precio = 120;\nconst iva = 0.25;\n\n// Calcula el total y muéstralo\n',
          solution: 'const precio = 120;\nconst iva = 0.25;\nconst total = precio * (1 + iva);\nconsole.log(`Total: ${total}`);',
          checks: [
            { label: 'La consola muestra «Total: 150»', kind: 'logs', expected: ['Total: 150'] },
            { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
          ]
        },
        {
          id: 'js-03',
          title: 'Decisiones con if',
          level: 'Intermedio',
          minutes: 10,
          xp: 50,
          summary: 'Escribe una función que devuelva un resultado distinto según la nota.',
          learn: [
            'Cómo usar if, else y operadores de comparación',
            'Cómo devolver un valor con return',
            'Cómo probar una función con varios casos'
          ],
          theory: `
            <p><code>if (condicion) { ... } else { ... }</code> ejecuta un bloque u otro. Las comparaciones devuelven un booleano: <code>&gt;=</code>, <code>&lt;</code>, <code>===</code>.</p>
            <p><code>return</code> termina la función y entrega un valor. Una función que devuelve algo se puede reutilizar en cualquier parte del programa.</p>
          `,
          task: 'Crea la función clasificar(nota): devuelve "Aprobado" si la nota es 6 o más, y "Reprobado" si es menor. Muestra clasificar(8) y clasificar(4) en la consola.',
          hint: 'Dentro de la función: if (nota >= 6) { return "Aprobado"; } y después el otro return.',
          type: 'code',
          language: 'js',
          starter: 'function clasificar(nota) {\n  // Tu lógica aquí\n}\n\n// Prueba con 8 y con 4\n',
          solution: 'function clasificar(nota) {\n  if (nota >= 6) {\n    return "Aprobado";\n  }\n  return "Reprobado";\n}\n\nconsole.log(clasificar(8));\nconsole.log(clasificar(4));',
          checks: [
            { label: 'La consola muestra «Aprobado» y «Reprobado»', kind: 'logs', expected: ['Aprobado', 'Reprobado'] },
            { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
          ]
        },
        {
          id: 'js-04',
          title: 'Arrays, filtros y orden',
          level: 'Intermedio',
          minutes: 11,
          xp: 50,
          summary: 'Filtra números, ordénalos de mayor a menor y recórrelos.',
          learn: [
            'Cómo recorrer un array',
            'Cómo usar filter y sort sin mutar por accidente',
            'Cómo imprimir cada resultado'
          ],
          theory: `
            <p><code>filter()</code> crea un array nuevo con los elementos que cumplen una condición. <code>sort()</code> ordena, pero por defecto compara texto; para números necesitas <code>(a, b) =&gt; b - a</code>.</p>
            <p><code>forEach()</code> recorre el array y ejecuta una función por cada elemento. Es ideal para imprimir resultados.</p>
          `,
          task: 'Parte del array [12, 5, 8, 130, 44]. Quédate con los mayores de 10, ordénalos de mayor a menor y muestra cada uno en una línea distinta.',
          hint: 'Encadena .filter(n => n > 10).sort((a, b) => b - a). Luego usa forEach.',
          type: 'code',
          language: 'js',
          starter: 'const numeros = [12, 5, 8, 130, 44];\n\n// Filtra, ordena y muestra\n',
          solution: 'const numeros = [12, 5, 8, 130, 44];\n\nnumeros\n  .filter((n) => n > 10)\n  .sort((a, b) => b - a)\n  .forEach((n) => console.log(n));',
          checks: [
            { label: 'La consola muestra 130, 44 y 12 en ese orden', kind: 'logs', expected: ['130', '44', '12'] },
            { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
          ]
        },
        {
          id: 'js-05',
          title: 'Objetos y reduce',
          level: 'Avanzado',
          minutes: 12,
          xp: 60,
          summary: 'Representa productos y suma sus precios con un acumulador.',
          learn: [
            'Cómo leer propiedades de un objeto',
            'Cómo funciona reduce con un acumulador',
            'Cómo combinar estructuras de datos'
          ],
          theory: `
            <p>Un objeto agrupa datos con nombre: <code>{ nombre: "Teclado", precio: 45 }</code>. Se accede con <code>producto.precio</code>.</p>
            <p><code>reduce()</code> recorre un array y acumula un único valor. Recibe una función <code>(acumulador, elemento) =&gt; nuevoAcumulador</code> y un valor inicial.</p>
          `,
          task: 'Crea un array productos con Teclado (45), Monitor (220) y Silla (180). Calcula el total con reduce y muestra exactamente «Total: 445».',
          hint: 'El valor inicial de reduce debe ser 0. Cada vuelta suma producto.precio al acumulador.',
          type: 'code',
          language: 'js',
          starter: 'const productos = [\n  { nombre: "Teclado", precio: 45 },\n  { nombre: "Monitor", precio: 220 },\n  { nombre: "Silla", precio: 180 }\n];\n\n// Calcula y muestra el total\n',
          solution: 'const productos = [\n  { nombre: "Teclado", precio: 45 },\n  { nombre: "Monitor", precio: 220 },\n  { nombre: "Silla", precio: 180 }\n];\n\nconst total = productos.reduce((suma, producto) => suma + producto.precio, 0);\nconsole.log("Total: " + total);',
          checks: [
            { label: 'La consola muestra «Total: 445»', kind: 'logs', expected: ['Total: 445'] },
            { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
          ]
        },
        {
          id: 'js-06',
          title: 'DOM y eventos',
          level: 'Avanzado',
          minutes: 15,
          xp: 70,
          summary: 'Selecciona elementos, escucha clics y actualiza el texto de la página.',
          learn: [
            'Cómo seleccionar elementos con querySelector',
            'Cómo escuchar eventos con addEventListener',
            'Cómo actualizar la interfaz con textContent'
          ],
          theory: `
            <p>El DOM es el árbol de elementos de la página. <code>document.querySelector("#btn")</code> selecciona el primer elemento que coincide con el selector.</p>
            <p><code>addEventListener("click", funcion)</code> ejecuta una función cada vez que ocurre el evento. Para cambiar texto visible, usa <code>textContent</code>, que trata el contenido como texto y no como HTML.</p>
          `,
          task: 'Selecciona el botón #btn y la salida #out. Lleva un contador de clics y, en cada clic, actualiza #out para que diga «Clics: N». La prueba hará dos clics.',
          hint: 'Declara let clics = 0; dentro del listener suma 1 y asigna out.textContent = "Clics: " + clics.',
          type: 'code',
          language: 'js',
          fixture: '<div class="demo"><p>Haz clic en el botón.</p><button id="btn">Sumar clic</button><output id="out">Clics: 0</output></div>',
          simulate: 'document.getElementById("btn").click(); document.getElementById("btn").click();',
          starter: 'const btn = document.querySelector("#btn");\nconst out = document.querySelector("#out");\nlet clics = 0;\n\n// Escucha el clic y actualiza la salida\n',
          solution: 'const btn = document.querySelector("#btn");\nconst out = document.querySelector("#out");\nlet clics = 0;\n\nbtn.addEventListener("click", () => {\n  clics += 1;\n  out.textContent = "Clics: " + clics;\n});',
          checks: [
            { label: 'Tras dos clics, la salida dice «Clics: 2»', kind: 'dom', selector: '#out', text: 'Clics: 2', mode: 'equals' },
            { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
          ]
        }
      ]
    },

    /* ============================================================
       PYTHON
       ============================================================ */
    {
      id: 'python',
      name: 'Python',
      title: 'Datos con Python',
      icon: 'python',
      color: '#3776ab',
      tagline: 'El lenguaje de la lógica y los datos',
      description: 'Practica sintaxis, condiciones, bucles, funciones y diccionarios con ejercicios guiados.',
      lessons: [
        {
          id: 'py-01',
          title: 'Tu primer print',
          level: 'Básico',
          minutes: 7,
          xp: 40,
          summary: 'Predice la salida de un programa que combina texto y variables.',
          learn: [
            'Cómo muestra Python datos con print',
            'Qué hace una coma dentro de print',
            'Cómo se declara una variable'
          ],
          theory: `
            <p><code>print()</code> muestra valores en la consola. Si separas argumentos con una coma, Python añade un espacio entre ellos.</p>
            <pre><code>nombre = "Ada"
print("Hola,", nombre)  # Hola, Ada</code></pre>
            <p>Las variables no llevan tipo declarado: Python deduce el tipo del valor. Un texto entre comillas es un <em>string</em>.</p>
          `,
          type: 'quiz',
          task: 'Observa el código y elige la salida exacta.',
          snippet: 'nombre = "Ada"\nprint("Hola,", nombre)',
          question: '¿Qué muestra la consola?',
          options: ['Hola, Ada', 'Hola,nombre', 'Hola nombre, Ada', 'Error: nombre no está definido'],
          answer: 0,
          explain: 'La coma separa dos argumentos y print añade un espacio entre ellos. El resultado es «Hola, Ada».',
          solution: 'Hola, Ada'
        },
        {
          id: 'py-02',
          title: 'Variables y f-strings',
          level: 'Básico',
          minutes: 8,
          xp: 40,
          summary: 'Completa un programa que presenta a una persona con una f-string.',
          learn: [
            'Cómo declarar texto y números',
            'Cómo interpolar variables con f-strings',
            'Por qué las comillas forman parte del texto'
          ],
          theory: `
            <p>Una f-string empieza con <code>f</code> y coloca variables entre llaves: <code>f"Hola, {nombre}"</code>. Es la forma más legible de combinar texto y datos en Python.</p>
            <p>Los textos necesitan comillas; los números no. <code>36</code> es un entero y <code>"36"</code> es un texto.</p>
          `,
          type: 'blanks',
          task: 'Completa las dos casillas para que el programa imprima «Ada tiene 36 años».',
          template: 'nombre = "{{1}}"\nedad = {{2}}\nprint(f"{nombre} tiene {edad} años")',
          blanks: [
            { id: 1, answer: ['Ada'], placeholder: 'texto', width: '72px' },
            { id: 2, answer: ['36'], placeholder: 'número', width: '56px' }
          ],
          explain: 'nombre es el texto "Ada" (las comillas ya están puestas) y edad es el número 36, sin comillas.',
          solution: 'nombre = "Ada"\nedad = 36\nprint(f"{nombre} tiene {edad} años")'
        },
        {
          id: 'py-03',
          title: 'Condicionales en orden',
          level: 'Intermedio',
          minutes: 9,
          xp: 50,
          summary: 'Ordena un if/else para que el programa tome la decisión correcta.',
          learn: [
            'Cómo se escribe un if y un else en Python',
            'Por qué la indentación es obligatoria',
            'Cómo se compara un número con >='
          ],
          theory: `
            <p>En Python, los bloques se definen por <strong>indentación</strong>, no por llaves. Después de <code>if condicion:</code> hay dos puntos y la línea siguiente va indentada con 4 espacios.</p>
            <pre><code>if nota >= 6:
    print("Aprobado")
else:
    print("Reprobado")</code></pre>
            <p><code>else</code> se ejecuta cuando ninguna condición anterior se cumplió. No lleva condición.</p>
          `,
          type: 'order',
          task: 'Ordena las líneas para que, con nota = 8, el programa imprima «Aprobado».',
          lines: [
            { id: 'a', code: 'nota = 8' },
            { id: 'b', code: 'if nota >= 6:' },
            { id: 'c', code: '    print("Aprobado")' },
            { id: 'd', code: 'else:' },
            { id: 'e', code: '    print("Reprobado")' }
          ],
          initial: ['c', 'e', 'a', 'd', 'b'],
          answer: ['a', 'b', 'c', 'd', 'e'],
          explain: 'Primero se asigna la nota. Después se evalúa la condición y se ejecuta la rama que corresponde. La indentación de 4 espacios es parte de la sintaxis.',
          solution: 'nota = 8\nif nota >= 6:\n    print("Aprobado")\nelse:\n    print("Reprobado")'
        },
        {
          id: 'py-04',
          title: 'Bucles y acumuladores',
          level: 'Intermedio',
          minutes: 10,
          xp: 50,
          summary: 'Completa un bucle que suma todos los números de una lista.',
          learn: [
            'Cómo recorrer una lista con for',
            'Cómo acumular un resultado con +=',
            'Por qué el acumulador empieza en cero'
          ],
          theory: `
            <p>Un <strong>acumulador</strong> es una variable que empieza en un valor neutro y se actualiza en cada vuelta. Para sumar, empieza en <code>0</code>.</p>
            <pre><code>total = 0
for n in [1, 2, 3]:
    total += n
print(total)  # 6</code></pre>
            <p><code>total += n</code> es una forma corta de <code>total = total + n</code>.</p>
          `,
          type: 'blanks',
          task: 'Completa el programa para que sume la lista y muestre 22.',
          template: 'numeros = [4, 7, 2, 9]\ntotal = {{1}}\nfor n in numeros:\n    total {{2}} n\nprint(total)',
          blanks: [
            { id: 1, answer: ['0'], placeholder: 'inicio', width: '52px' },
            { id: 2, answer: ['+=', '= total +'], placeholder: 'operador', width: '88px' }
          ],
          explain: 'El acumulador empieza en 0. Dentro del bucle, total += n suma cada número. 4 + 7 + 2 + 9 = 22.',
          solution: 'numeros = [4, 7, 2, 9]\ntotal = 0\nfor n in numeros:\n    total += n\nprint(total)'
        },
        {
          id: 'py-05',
          title: 'Funciones reutilizables',
          level: 'Avanzado',
          minutes: 11,
          xp: 60,
          summary: 'Ordena una función con parámetro y valor de retorno.',
          learn: [
            'Cómo definir una función con def',
            'Cómo devolver un valor con return',
            'Cómo llamar a una función y usar su resultado'
          ],
          theory: `
            <p>Una función agrupa lógica con un nombre. Recibe parámetros y devuelve un resultado con <code>return</code>. Definirla no la ejecuta: hay que llamarla.</p>
            <pre><code>def saludar(nombre):
    return f"Hola, {nombre}"

print(saludar("Ada"))</code></pre>
            <p>El valor que devuelve <code>return</code> puede usarse directamente dentro de otro <code>print</code>.</p>
          `,
          type: 'order',
          task: 'Ordena las líneas para definir la función y usarla. La salida debe ser «Hola, Ada».',
          lines: [
            { id: 'a', code: 'def saludar(nombre):' },
            { id: 'b', code: '    mensaje = f"Hola, {nombre}"' },
            { id: 'c', code: '    return mensaje' },
            { id: 'd', code: 'print(saludar("Ada"))' }
          ],
          initial: ['c', 'd', 'a', 'b'],
          answer: ['a', 'b', 'c', 'd'],
          explain: 'Primero se define la función. Dentro, se construye el mensaje y se devuelve. Al final, se llama a saludar con "Ada" y se imprime el resultado.',
          solution: 'def saludar(nombre):\n    mensaje = f"Hola, {nombre}"\n    return mensaje\n\nprint(saludar("Ada"))'
        },
        {
          id: 'py-06',
          title: 'Diccionarios',
          level: 'Avanzado',
          minutes: 10,
          xp: 70,
          summary: 'Accede a valores por clave y predice el resultado de una operación.',
          learn: [
            'Cómo se crea un diccionario con llaves',
            'Cómo se accede a un valor por su clave',
            'Qué ocurre al operar con los valores'
          ],
          theory: `
            <p>Un diccionario guarda pares <strong>clave: valor</strong>. Se accede al valor con corchetes y la clave: <code>precios["monitor"]</code>.</p>
            <pre><code>precios = {"teclado": 45, "monitor": 220}
print(precios["monitor"])  # 220</code></pre>
            <p>Las claves suelen ser textos únicos. Si la clave no existe, Python lanza un <code>KeyError</code>.</p>
          `,
          type: 'quiz',
          task: 'Observa el código y elige el resultado exacto.',
          snippet: 'precios = {"teclado": 45, "monitor": 220}\nprint(precios["monitor"] + precios["teclado"])',
          question: '¿Qué muestra la consola?',
          options: ['265', 'monitor + teclado', '220', 'Error: no se pueden sumar textos'],
          answer: 0,
          explain: 'precios["monitor"] devuelve 220 y precios["teclado"] devuelve 45. La suma es 265.',
          solution: '265'
        }
      ]
    }
  ],

  /* ============================================================
     RETOS POR NIVEL
     ============================================================ */
  challenges: [
    {
      id: 'ch-01',
      challenge: true,
      track: 'html',
      topic: 'HTML + CSS',
      title: 'Tarjeta de perfil',
      level: 'Básico',
      minutes: 15,
      xp: 100,
      summary: 'Combina estructura y estilos para presentar a una persona en una tarjeta.',
      learn: [
        'Combinar HTML y CSS en un mismo archivo',
        'Aplicar estilos con clases',
        'Crear un avatar con iniciales, sin imágenes externas'
      ],
      theory: `
        <p>Los retos combinan lo aprendido. Aquí vas a construir una tarjeta de perfil completa usando HTML para el contenido y un bloque <code>&lt;style&gt;</code> para el diseño.</p>
        <p>Puedes escribir el <code>&lt;style&gt;</code> dentro del HTML. En un proyecto real iría en un archivo CSS aparte, pero para practicar es perfecto.</p>
      `,
      task: 'Crea un <article class="card"> con un <div class="avatar">AL</div>, un <h2> «Ada Lovelace», un <p> que mencione «programadora» y un enlace a https://es.wikipedia.org/wiki/Ada_Lovelace que diga «Conocer su historia». En un <style>, haz que .card tenga padding 20px, border-radius 16px y un borde de 1px sólido #e3ddd0; y que .avatar tenga display inline-block, fondo #14161a, color #c9f24d, border-radius 999px, padding 12px 14px y font-weight 700.',
      hint: 'El avatar es un div con las iniciales. Para que se vea como un círculo, combina padding y border-radius: 999px.',
      type: 'code',
      language: 'html',
      starter: '<style>\n\n</style>\n\n<article class="card">\n\n</article>',
      solution: '<style>\n  .card {\n    padding: 20px;\n    border: 1px solid #e3ddd0;\n    border-radius: 16px;\n    max-width: 320px;\n  }\n  .avatar {\n    display: inline-block;\n    background: #14161a;\n    color: #c9f24d;\n    border-radius: 999px;\n    padding: 12px 14px;\n    font-weight: 700;\n  }\n</style>\n\n<article class="card">\n  <div class="avatar">AL</div>\n  <h2>Ada Lovelace</h2>\n  <p>Matemática y primera programadora de la historia.</p>\n  <a href="https://es.wikipedia.org/wiki/Ada_Lovelace">Conocer su historia</a>\n</article>',
      checks: [
        { label: 'Existe el article.card', kind: 'dom', selector: 'article.card' },
        { label: 'El avatar dice «AL»', kind: 'dom', selector: '.card .avatar', text: 'AL', mode: 'equals' },
        { label: 'El nombre es «Ada Lovelace»', kind: 'dom', selector: '.card h2', text: 'Ada Lovelace', mode: 'equals' },
        { label: 'La descripción menciona «programadora»', kind: 'dom', selector: '.card p', text: 'programadora', mode: 'includes' },
        { label: 'El enlace apunta a la biografía', kind: 'dom', selector: '.card a', attr: 'href', equals: 'https://es.wikipedia.org/wiki/Ada_Lovelace' },
        { label: 'La tarjeta tiene padding de 20px', kind: 'style', selector: '.card', property: 'padding', equals: '20px' },
        { label: 'La tarjeta tiene esquinas de 16px', kind: 'style', selector: '.card', property: 'border-radius', equals: '16px' },
        { label: 'El avatar tiene fondo oscuro', kind: 'style', selector: '.avatar', property: 'background-color', equals: 'rgb(20, 22, 26)' },
        { label: 'El avatar es una píldora', kind: 'style', selector: '.avatar', property: 'border-radius', equals: '999px' }
      ]
    },
    {
      id: 'ch-02',
      challenge: true,
      track: 'js',
      topic: 'JavaScript',
      title: 'Contador de vocales',
      level: 'Intermedio',
      minutes: 15,
      xp: 120,
      summary: 'Recorre un texto y cuenta vocales, incluidas las acentuadas.',
      learn: [
        'Cómo recorrer un string',
        'Cómo usar expresiones regulares con match',
        'Cómo tratar mayúsculas y acentos'
      ],
      theory: `
        <p>Un string se puede recorrer carácter por carácter o analizar con expresiones regulares. La bandera <code>g</code> encuentra todas las coincidencias y <code>i</code> ignora mayúsculas y minúsculas.</p>
        <p><code>match()</code> devuelve un array con las coincidencias o <code>null</code> si no encuentra ninguna. Conviene comprobar ese caso antes de usar <code>length</code>.</p>
      `,
      task: 'Crea contarVocales(texto): debe contar las vocales a, e, i, o, u y sus versiones acentuadas, sin distinguir mayúsculas. Muestra el resultado para "Programación".',
      hint: 'Pasa el texto a minúsculas y usa /[aeiouáéíóú]/g. Si match devuelve null, el total es 0.',
      type: 'code',
      language: 'js',
      starter: 'function contarVocales(texto) {\n  // Tu lógica aquí\n}\n\nconsole.log(contarVocales("Programación"));\n',
      solution: 'function contarVocales(texto) {\n  const encontradas = texto.toLowerCase().match(/[aeiouáéíóú]/g);\n  return encontradas ? encontradas.length : 0;\n}\n\nconsole.log(contarVocales("Programación"));',
      checks: [
        { label: 'La consola muestra 5', kind: 'logs', expected: ['5'] },
        { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
      ]
    },
    {
      id: 'ch-03',
      challenge: true,
      track: 'js',
      topic: 'JavaScript',
      title: 'FizzBuzz',
      level: 'Avanzado',
      minutes: 18,
      xp: 150,
      summary: 'El reto clásico de lógica: múltiplos, condiciones y orden.',
      learn: [
        'Cómo combinar varias condiciones',
        'Por qué importa el orden de los if',
        'Cómo comprobar una salida de varias líneas'
      ],
      theory: `
        <p>FizzBuzz recorre los números del 1 al 15. Si un número es divisible por 3, muestra «Fizz»; si es divisible por 5, «Buzz»; y si es divisible por ambos, «FizzBuzz».</p>
        <p>El orden importa: comprueba primero el caso divisible por 15. Si compruebas el 3 antes, nunca llegarás a «FizzBuzz».</p>
      `,
      task: 'Recorre del 1 al 15 y muestra una línea por número: "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, "FizzBuzz" si es divisible por ambos, y el número en caso contrario.',
      hint: 'Usa n % 15 === 0 para el caso combinado. Después n % 3 y n % 5. El resto de la división se obtiene con %.',
      type: 'code',
      language: 'js',
      starter: 'for (let n = 1; n <= 15; n++) {\n  // Tu lógica aquí\n}\n',
      solution: 'for (let n = 1; n <= 15; n++) {\n  if (n % 15 === 0) {\n    console.log("FizzBuzz");\n  } else if (n % 3 === 0) {\n    console.log("Fizz");\n  } else if (n % 5 === 0) {\n    console.log("Buzz");\n  } else {\n    console.log(n);\n  }\n}',
      checks: [
        {
          label: 'La consola muestra la secuencia completa de FizzBuzz',
          kind: 'logs',
          expected: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
        },
        { label: 'El código se ejecuta sin errores', kind: 'noErrors' }
      ]
    }
  ]
};
