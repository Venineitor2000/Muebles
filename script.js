// Espera a que todo el contenido de la página (HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // --- NUEVA SECCIÓN: GENERACIÓN DINÁMICA DE PRODUCTOS ---
    // ======================================================

    /**
     * ¡Aquí defines tu catálogo!
     * Modifica el 'precio' de cada producto.
     * Asegúrate de que las imágenes existan en la carpeta "Fotos/"
     */
    const catalogoProductos = [
        { archivo: "BARCITO BODEGA 0.60CM X 0.36.png", precio: "$PRECIO" },
        { archivo: "BARRA DE BAR DE 1.60MT X 1MT.png", precio: "$PRECIO" },
        { archivo: "VAJILLERO DE MADERA CON TAPA DE MARMOL DE 2.50 X 0.5.png", precio: "$PRECIO" },
        { archivo: "VAJILLERO CHICO  CON TAPA MARMOL BLANCO 1.15MT X 0.32CM.png", precio: "$PRECIO" },
        { archivo: "RACK DE TV 2.55MT X 0.60CM.png", precio: "$PRECIO" },
        { archivo: "ESPEJO 2MTS X 1MT.png", precio: "$PRECIO" },
        { archivo: "ESPEJO BORDE LAQUEADO NEGRO 1MT X 0.6 CON REBORDE.png", precio: "$PRECIO" },
        { archivo: "ESPEJO MADERA 1.35MTS X 0.89.png", precio: "$PRECIO" },
        { archivo: "bahiut madera 2.20mt x 0.47 x 1.30 de alto.png", precio: "$PRECIO" },
        { archivo: "BANQUETA TAPIZADA por 3 unidades.png", precio: "$PRECIO" },
        { archivo: "ESCRITORIO ANTIGUO 1.30MT X 0.7CM.png", precio: "$PRECIO" },
        { archivo: "RELOJ ANTIGUO DE PARED.png", precio: "$PRECIO" },
        { archivo: "JUEGO LIVING 1 SILLON 3 CUERPOS DE 1.80 X 0.90 X 0.80 Y DOS DE 1 CUERPO DE 0.77 X 0.90 X 0.83.png", precio: "$PRECIO" },
        { archivo: "MESA DE VIDRIO COLOR HUMO 2MTS X 1MT.png", precio: "$PRECIO" },
        { archivo: "ARAÑA COLGANNTE.png", precio: "$PRECIO" },
        { archivo: "ARAÑA DE CAIRELES.png", precio: "$PRECIO" },
        { archivo: "APLIQUE DE CAIRELES.png", precio: "$PRECIO" },
        { archivo: "MESA RATONA DE MADERA ANTIGUA 0.57CM X 0.38CM.png", precio: "$PRECIO" },
        { archivo: "MESA RATONA MADERA Y VIDRIO 0.90CM X 0.50CM.png", precio: "$PRECIO" },
        { archivo: "MESA RATONA LAQUEADA CON MARMOL ARRIBA 1MT X 0.55CM.png", precio: "$PRECIO" },
        { archivo: "MESA MADERA CON VIDRIO ARRIBA 1.90mt x 1 mt Y 4 SILLAS MADERA CON TAPIZADO.png", precio: "$PRECIO" },
        { archivo: "SILLA ANTIGUA TAPIZADA.png", precio: "$PRECIO" },
        { archivo: "SILLA CON ESTERILLA.png", precio: "$PRECIO" },
        { archivo: "SILLA DE MADERA TAPIZADA por 4 unidades.png", precio: "$PRECIO" },
        { archivo: "SILLON DE CABECERA por 2 unidades.png", precio: "$PRECIO" },
        { archivo: "SILLA CON RESPALDO DE CUERO TALLADO por 2 unidades.png", precio: "$PRECIO" },
        { archivo: "SILLA DE MADERA LAQUEADA Y TAPIZADA por 6 unidades.png", precio: "$PRECIO" },
        { archivo: "SILLA MADERA Y CUERINA por 4 unidades.png", precio: "$PRECIO" },
        { archivo: "SILLON INDIVIDUAL 0.77 x 0.90 x 0.83.png", precio: "$PRECIO" },
        { archivo: "MESA LUZ MADERA CON TAPA MARMOL 0.50CM X 0.38CM.png", precio: "$PRECIO" },
        { archivo: "BUTACA MADERA por 3 unidades.png", precio: "$PRECIO" },
        { archivo: "MESA MADERA 0.80 X 0.80 EXTENSIBLE A 1.60 MT.png", precio: "$PRECIO" },
        { archivo: "MESA EXTENDIDA.png", precio: "$PRECIO" },
        { archivo: "MESITA MADERA 0.40X 0.30X 0.67 DE ALTO.png", precio: "$PRECIO" },
        { archivo: "MUEBLE BAR CON RUEDAS TAPA AZULEJO BLANCA 0.50 CM X 0.38CM X 0.83 CM.png", precio: "$PRECIO" },
        { archivo: "MESA RATONA MARMOL Y HIERRO 0.50CM X 0.50CM.png", precio: "$PRECIO" },
        { archivo: "SOMIER DOS PLAZAS 1,40 MT X 1,90 MT.png", precio: "$PRECIO" },
        { archivo: "RESPALDO CAMA 2MTS.png", precio: "$PRECIO" },
        { archivo: "SOMIER INDIVIDUAL CON COLCHON 1.90MTS X 0.80 MTS.png", precio: "$PRECIO" },
        { archivo: "CAJONERA 0.50CM X 0.38 CM.png", precio: "$PRECIO" },
        { archivo: "COMODA CON CAJONES Y VIDRIO ARRIBA 1.30MTS X 0.5CM.png", precio: "$PRECIO" },
        { archivo: "LAVARROPAS DREAM EXCELLENT CARGA FRONTAL 0.85CM X 0.60CM.png", precio: "$PRECIO" },
        { archivo: "MESA COMPUTADORA 0.7CM X 0.53CM.png", precio: "$PRECIO" },
        { archivo: "BIBLIOTECA 1.70MT DE ALTO X0.70CM X 0.50CM.png", precio: "$PRECIO" },
        { archivo: "MESA TV 0.90CM X 0.60CM.png", precio: "$PRECIO" },
        { archivo: "MESA TV MADERA 0.70CM X 0.43CM.png", precio: "$PRECIO" },
        { archivo: "SILLON CAMA 1.45MTS X 0.90CM.png", precio: "$PRECIO" },
        { archivo: "SILLON CAMA ABIERTO.png", precio: "$PRECIO" },
        { archivo: "LAMPARA.png", precio: "$PRECIO" },
        { archivo: "VELADOR POR DOS.png", precio: "$PRECIO" },
        { archivo: "lampara de escritorio.png", precio: "$PRECIO" },
        { archivo: "lampara de pie.png", precio: "$PRECIO" },
        { archivo: "2 bases de velador angelitos.png", precio: "$PRECIO" },
        { archivo: "CUADRO ALJIBE.png", precio: "$PRECIO" },
        { archivo: "CUADRO BARCO.png", precio: "$PRECIO" },
        { archivo: "CUADRO JARRON.png", precio: "$PRECIO" },
        { archivo: "CUADRO MADONNA.png", precio: "$PRECIO" },
        { archivo: "CUADRO NATURALEZA MUERTA.png", precio: "$PRECIO" },
        { archivo: "CUADRO PAISAJE.png", precio: "$PRECIO" },
        { archivo: "CUADRO MUJER.png", precio: "$PRECIO" },
        { archivo: "ESCUDO 025CM X 0.20 CM.png", precio: "$PRECIO" },
        { archivo: "ESPADAS 0.25CM X 0.20CM.png", precio: "$PRECIO" },
        { archivo: "ESTATUA 0.30CM.png", precio: "$PRECIO" },
        { archivo: "2 adornos cisne.png", precio: "$PRECIO" },
        { archivo: "2 jarras cerveceras con manijas.png", precio: "$PRECIO" },
        { archivo: "2 jarras cerveceras grandes y 2 chicas.png", precio: "$PRECIO" },
        { archivo: "2 jarras cerveceras plateadas.png", precio: "$PRECIO" },
        { archivo: "2 portavelas ceramica.png", precio: "$PRECIO" },
        { archivo: "6 jarras cerveceras.png", precio: "$PRECIO" },
        { archivo: "jarra de sangria y 5 vasos.png", precio: "$PRECIO" },
        { archivo: "cajonera y baulera cabecera de cama 0.90 x 0.40 .png", precio: "$PRECIO" },
        { archivo: "escritorio 1.20 x 0.80 .png", precio: "$PRECIO" },
        { archivo: "fuente decorativa 0.30 x 0.64 .png", precio: "$PRECIO" },
        { archivo: "jarron chino.png", precio: "$PRECIO" },
        { archivo: "jarron floreado.png", precio: "$PRECIO" },
        { archivo: "jarron plateado.png", precio: "$PRECIO" },
        { archivo: "juego de platil.png", precio: "$PRECIO" },
        { archivo: "paraguero de ceramica.png", precio: "$PRECIO" },
        { archivo: "percha valet de madera oscura.png", precio: "$PRECIO" },
        { archivo: "percha valet madera clara.png", precio: "$PRECIO" },
        { archivo: "porcelana limoge original.png", precio: "$PRECIO" },
        { archivo: "potiche ceramica.png", precio: "$PRECIO" },
        { archivo: "potiche plateado con base.png", precio: "$PRECIO" },
        { archivo: "espejo particionado 0.80x 0.7.png", precio: "$PRECIO" },
        { archivo: "espejo cuadricula con estante 0.50 x 0.76.png", precio: "$PRECIO" },
        { archivo: "espejo madera 1m x 0.55.png", precio: "$PRECIO" }
    ];

    // 1. Seleccionar el contenedor principal
    const catalogoContainer = document.querySelector(".catalogo-container");

    // 2. Recorrer el NUEVO array y crear el HTML para cada producto
    catalogoProductos.forEach(producto => {

        // Extraemos los datos del objeto
        const nombreArchivo = producto.archivo;
        const precioProducto = producto.precio;

        // Construir la ruta completa de la imagen
        const pathFoto = `Fotos/${nombreArchivo}`;

        // Obtener el nombre sin extensión (ej: "Silla.png" -> "Silla")
        const nombreProducto = nombreArchivo.substring(0, nombreArchivo.lastIndexOf('.')) || nombreArchivo;

        // Crear el bloque HTML para este producto (¡AHORA CON PRECIO!)
        const productoHTML = `
        <section class="producto-card">
            <div class="producto-imagen">
                <img src="${pathFoto}"
                     alt="${nombreProducto}"
                     data-fullsrc="${pathFoto}">
            </div>
            <div class="producto-info">
                <h2 class="producto-nombre">${nombreProducto}</h2>
                
                <p class="producto-precio">${precioProducto}</p>
                
                <a href="https://wa.me/+5493415460211?text=Hola!%20Me%20interesa%20el%20producto%20${encodeURIComponent(nombreProducto)}" class="producto-wsp" target="_blank">
                    Consultar por WhatsApp
                </a>
            </div>
            <div class="scroll-prompt">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        </section>
        `;

        // 3. Insertar el nuevo producto en el contenedor
        catalogoContainer.innerHTML += productoHTML;
    });


    // ======================================================
    // --- CÓDIGO ORIGINAL DEL LIGHTBOX (AHORA SE EJECUTA DESPUÉS) ---
    // ======================================================

    // 1. Seleccionar los elementos del DOM del Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cerrarBtn = document.querySelector(".lightbox-cerrar");

    // Selecciona TODAS las imágenes de producto (que acabamos de crear)
    const imagenesProducto = document.querySelectorAll(".producto-imagen img");

    // 2. Función para abrir el Lightbox (sin cambios)
    function abrirLightbox(e) {
        const imgElement = e.currentTarget;
        const fullSrc = imgElement.dataset.fullsrc || imgElement.src;
        lightboxImg.src = fullSrc;
        lightbox.classList.add("visible");
    }

    // 3. Función para cerrar el Lightbox (sin cambios)
    function cerrarLightbox() {
        lightbox.classList.remove("visible");
        lightboxImg.src = "";
    }

    // 4. Asignar los Eventos

    // A cada imagen de producto, le asignamos el clic para ABRIR
    imagenesProducto.forEach(img => {
        img.addEventListener("click", abrirLightbox);
    });

    // Al botón 'X' le asignamos el clic para CERRAR
    cerrarBtn.addEventListener("click", cerrarLightbox);

    // También cerramos si el usuario hace clic FUERA de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            cerrarLightbox();
        }
    });

});