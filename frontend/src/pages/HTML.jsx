import "bootstrap/dist/css/bootstrap.min.css";

const HTMLPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1
          className="display-4"
          style={{ color: "#E34F26", fontWeight: "bold" }}
        >
          HTML: Construyendo la Estructura Web
        </h1>
        <p className="lead" style={{ color: "#0f0f0f" }}>
          HTML (HyperText Markup Language) es el lenguaje estándar de marcado
          utilizado para crear y estructurar el contenido en la web. Define la
          estructura básica de las páginas web mediante el uso de etiquetas que
          organizan texto, imágenes, enlaces, formularios, videos y otros
          elementos. HTML permite a los navegadores interpretar y mostrar el
          contenido de manera coherente, proporcionando una base que puede ser
          complementada con CSS para estilos y JavaScript para interactividad.
        </p>
      </div>

      {/* Sección completa para texto e imagen centrada debajo */}
      <div className="mb-5">
        <h3 style={{ color: "#E34F26" }}>Estructura básica del documento</h3>
        <br />
        <div className="text-center">
          <img
            src="images/estructura.png"
            alt="Estructura basica de HTML."
            className="img-fluid rounded shadow"
            style={{ Width: "80%", border: "3px solid #E34F26" }}
          />
        </div>
        <br />
        <p>
          Un documento HTML siempre comienza con la declaración{" "}
          <b>&lt;!DOCTYPE html&gt;</b>, que le indica al navegador que debe
          interpretar el contenido como HTML5. Esta declaración no es una
          etiqueta, sino una instrucción para asegurarse de que la página se
          renderice correctamente bajo los estándares más recientes.
        </p>
        <p>
          Luego, todo el contenido se envuelve dentro de la etiqueta
          <b>&lt;html&gt;</b>. Esta etiqueta representa el inicio y el final del
          documento HTML. El atributo <b>lang=&#34;en&#34;</b> en{" "}
          <b>&lt;html&gt;</b>
          especifica que el idioma principal del contenido es inglés, lo que es
          útil para la accesibilidad y para los motores de búsqueda.
        </p>
        <p>
          Dentro de <b>&lt;html&gt;</b>, hay dos secciones principales:{" "}
          <b>&lt;head&gt;</b> y<b>&lt;body&gt;.</b>
        </p>
        <ul>
          <li>
            <b>&lt;head&gt;:</b> Esta sección contiene metadatos sobre el
            documento que no se muestran directamente en la página. Incluye
            elementos como:
          </li>
          <br />
          <ul>
            <li>
              <b>&lt;meta charset=&#34;UTF-8&#34;&gt;: </b>Especifica la
              codificación de caracteres que se utilizará, asegurando que el
              texto se muestre correctamente (por ejemplo, para caracteres
              especiales).
            </li>
            <br />
            <li>
              <b>
                &lt;meta name=&#34;viewport&#34;
                content=&#34;width=device-width, initial-scale=1.0&#34;&gt;:{" "}
              </b>
              Controla cómo se muestra la página en dispositivos móviles,
              asegurando que la página se adapte a diferentes tamaños de
              pantalla para una experiencia responsive.
            </li>
            <br />
            <li>
              <b>&lt;title&gt;: </b>Define el título de la página que aparecerá
              en la pestaña del navegador o en los resultados de búsqueda.
            </li>
            <br />
            <li>
              También se pueden incluir enlaces a archivos CSS (
              <b>&lt;link&gt;</b>) y scripts (<b>&lt;script&gt;</b>),
              permitiendo que se carguen estilos y funcionalidades adicionales.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <b>&lt;body&gt;: </b>Esta es la parte más importante para el
            usuario, ya que contiene todo el contenido visible en la página web.
            Todo lo que el usuario puede ver e interactuar, como texto,
            imágenes, videos, enlaces, botones y formularios, se coloca dentro
            de <b>&lt;body&gt;.</b>
          </li>
        </ul>
      </div>

      {/* Sección con columnas para texto e imagen */}
      <div className="mb-5">
        <h3 style={{ color: "#E34F26" }}>Etiquetas de encabezado y texto</h3>
        <p>
          Las etiquetas de encabezado (<b>&lt;h1&gt;</b> a <b>&lt;h6&gt;</b>)
          permiten organizar el contenido en diferentes niveles de importancia,
          con <b>&lt;h1&gt;</b> siendo el más importante y <b>&lt;h6&gt;</b> el
          menos importante. Estas etiquetas ayudan a crear una jerarquía de
          contenido, lo que mejora la accesibilidad y la comprensión tanto para
          los usuarios como para los motores de búsqueda.
        </p>
        <p>
          Los párrafos de texto se agregan utilizando la etiqueta{" "}
          <b>&lt;p&gt;</b>, que permite agrupar bloques de texto separados. Los
          encabezados se usan para títulos de secciones, y los párrafos se
          utilizan para contenido continuo, como explicaciones, descripciones y
          artículos.
        </p>

        <div className="text-center">
          <img
            src="images/ejemplo5.png"
            alt="Ejemplo de etiqueta de encabezado y texto."
            className="img-fluid rounded shadow"
            style={{ border: "3px solid #E34F26" }}
          />
        </div>
      </div>

      {/* Ejemplo de más secciones con columnas */}
      <div className="mb-5">
        <h3 style={{ color: "#E34F26" }}>
          Hipervínculos (<code>&lt;a&gt;</code>)
        </h3>
        <p>
          Los hipervínculos son fundamentales para la navegación web, ya que
          permiten conectar diferentes páginas, recursos, y documentos. Se crean
          con la etiqueta <b>&lt;a&gt;</b>, que requiere el atributo <b>href</b>{" "}
          para definir la URL a la que se desea enlazar. Por ejemplo,{" "}
          <a href="">Visitar Ejemplo</a> crea un enlace clicable que lleva al
          sitio especificado.
        </p>
        <p>
          Los enlaces también pueden usarse para redirigir a secciones dentro de
          la misma página, utilizando anclas con el símbolo <b>#</b>, por
          ejemplo, <a href="#seccion">Ir a la Sección</a>. Son esenciales para
          crear una navegación fluida y mejorar la estructura de la web.
        </p>
      </div>

      {/* Otra sección para texto e imagen centrada */}
      <div className="mb-5">
        <h3 style={{ color: "#E34F26" }}>
          Imágenes (<code>&lt;img&gt;</code>)
        </h3>
        <p>
          Las imágenes se insertan en una página web mediante la etiqueta
          <b>&lt;img&gt;.</b> Esta etiqueta es auto-cerrada y requiere al menos
          dos atributos: <b>src (source)</b>, que especifica la ruta del archivo
          de imagen, y <b>alt (texto alternativo)</b>, que proporciona una
          descripción de la imagen en caso de que no se cargue correctamente.
        </p>
        <p>
          Ejemplo:{" "}
          <b>
            &lt;img src=&#34;imagen.jpg&#34; alt=&#34;Descripción de la
            imagen&#34;&gt;.{" "}
          </b>{" "}
          Además, se pueden incluir atributos adicionales como width y height
          para controlar el tamaño de la imagen. Las imágenes hacen que el
          contenido sea más visual y atractivo, además de ayudar a ilustrar
          conceptos o productos.
        </p>
        <div className="text-center">
          <img
            src="images/ejemplo4.png"
            alt="Ejemplo de etiqueta de imagen"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "80%", border: "3px solid #E34F26" }}
          />
        </div>
      </div>

      {/* Sección con columnas para texto e imagen */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <h3 style={{ color: "#E34F26" }}>Etiquetas de lista</h3>
          <p>
            HTML permite organizar información en listas, que pueden ser
            ordenadas (&lt;ol&gt;) o no ordenadas (&lt;ul&gt;). Las listas
            ordenadas muestran los elementos numerados, mientras que las no
            ordenadas usan viñetas. Cada elemento de la lista se coloca dentro
            de la etiqueta &lt;li&gt;. Las listas son útiles para presentar
            información de manera clara, como enumerar pasos de un proceso,
            características de un producto, o cualquier conjunto de elementos
            relacionados.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="images/ejemplo3.png"
            alt="Ejemplo de etiqueta de encabezado y texto."
            className="img-fluid rounded shadow"
            style={{ border: "3px solid #E34F26" }}
          />
        </div>
      </div>

      <div className="mb-5">
        <h3 style={{ color: "#E34F26" }}>Uso de comentarios</h3>
        <p>
          Los comentarios son secciones de texto que el navegador ignora y no
          muestra en la página web. Se crean usando <b>&lt;!--</b> para abrir y{" "}
          <b>--&gt;</b> para cerrar. Los desarrolladores los usan para dejar
          notas, recordatorios o explicaciones sobre partes del código, sin
          afectar la apariencia de la página.
        </p>
        <p>
          Ejemplo:{" "}
          <b>
            &lt;!-- Este es un comentario que no se mostrará en el navegador
            --&gt;{" "}
          </b>
          . Son especialmente útiles para colaborar en proyectos, explicando
          partes complejas del código, y para mantener el código organizado y
          fácil de entender.
        </p>
      </div>
    </div>
  );
};

export default HTMLPage;
