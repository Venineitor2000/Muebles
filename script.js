// Espera a que todo el contenido de la p�gina (HTML) est� cargado
document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // --- NUEVA SECCI�N: GENERACI�N DIN�MICA DE PRODUCTOS ---
    // ======================================================

    /**
     * �Aqu� defines tu cat�logo!
     * Simplemente agrega los nombres de archivo de tus im�genes.
     * Aseg�rate de que estas im�genes existan en la carpeta "Fotos/"
     */
    const nombresFotos = [
        "BARCITO BODEGA 0.60CM X 0.36.png",
        "BARRA DE BAR DE 1.60MT X 1MT.png",
        "VAJILLERO DE MADERA CON TAPA DE MARMOL DE 2.50 X 0.5.png",
        "VAJILLERO CHICO  CON TAPA MARMOL BLANCO 1.15MT X 0.32CM.png",
        "RACK DE TV 2.55MT X 0.60CM.png",
        "ESPEJO 2MTS X 1MT.png",
        "ESPEJO BORDE LAQUEADO NEGRO 1MT X 0.6 CON REBORDE.png",
        "ESPEJO MADERA 1.35MTS X 0.89.png",
        "bahiut madera 2.20mt x 0.47 x 1.30 de alto.png",
        "BANQUETA TAPIZADA.png",
        "ESCRITORIO ANTIGUO 1.30MT X 0.7CM.png",
        "MUEBLECITO ANTIGUO 0,40x0,30 x 0,80 de alto.png",
        "RELOJ ANTIGUO DE PARED.png",
        "JUEGO LIVING 1 SILLON 3 CUERPOS Y DOS DE 1 CUERPO.png",
        "MESA DE VIDRIO COLOR HUMO 2MTS X 1MT.png",
        "ARAÑA COLGANNTE.png",
        "ARAÑA DE CAIRELES.png",
        "APLIQUE DE CAIRELES.png",
        "MESA RATONA DE MADERA ANTIGUA 0.57CM X 0.38CM.png",
        "MESA RATONA MADERA Y VIDRIO 0.90CM X 0.50CM.png",
        "MESA RATONA LAQUEADA CON MARMOL ARRIBA 1MT X 0.55CM.png",
        "MESA MADERA CON VIDRIO ARRIBA 1.90mt x 1 mt Y 4 SILLAS MADERA CON TAPIZADO.png",
        "SILLA ANTIGUA TAPIZADA.png",
        "SILLA CON ESTERILLA.png",
        "SILLA DE MADERA TAPIZADA.png",
        "SILLON DE CABECERA.png",
        "SILLA CON RESPALDO DE CUERO TALLADO.png",
        "SILLA DE MADERA LAQUEADA Y TAPIZADA.png",
        "SILLA MADERA Y CUERINA.png",
        "SILLON INDIVIDUAL.png",
        "MESA LUZ MADERA CON TAPA MARMOL 0.50CM X 0.38CM.png",
        "BUTACA MADERA.png",
        "MESA MADERA 0.80 X 0.80 EXTENSIBLE A 1.60 MT.png",
        "MESITA MADERA 0.40X 0.30X 0.67 DE ALTO.png",
        "MUEBLE BAR CON RUEDAS TAPA AZULEJO BLANCA 0.50 CM X 0.38CM X 0.83 CM.png",
        "MESA EXTENDIDA.png",
        "MESA RATONA MARMOL Y HIERRO 0.50CM X 0.50CM.png",
        "SOMIER DOS PLAZAS 1,40 MT X 1,90 MT.png",
        "RESPALDO CAMA 2MTS.png",
        "SOMIER INDIVIDUAL CON COLCHON 1.90MTS X 0.80 MTS.png",
        "CAJONERA 0.50CM X 0.38 CM.png",
        "COMODA CON CAJONES Y VIDRIO ARRIBA 1.30MTS X 0.5CM.png",
        "LAVARROPAS DREAM EXCELLENT CARGA FRONTAL 0.85CM X 0.60CM.png",
        "MESA COMPUTADORA 0.7CM X 0.53CM.png",
        "BIBLIOTECA 1.70MT DE ALTO X0.70CM X 0.50CM.png",
        "MESA TV 0.90CM X 0.60CM.png",
        "MESA TV MADERA 0.70CM X 0.43CM.png",
        "SILLON CAMA 1.45MTS X 0.90CM.png",
        "SILLON CAMA ABIERTO.png",
        "LAMPARA.png",
        "LAMPARA AZUL.png",
        "VELADOR POR DOS.png",
        "lampara de escritorio.png",
        "lampara de pie.png",
        "2 bases de velador angelitos.png",
        "CUADRO ALJIBE.png",
        "CUADRO BARCO.png",
        "CUADRO JARRON.png",
        "CUADRO MADONNA.png",
        "CUADRO NATURALEZA MUERTA.png",
        "CUADRO PAISAJE.png",
        "CUADRO MUJER.png",
        "ESCUDO 025CM X 0.20 CM.png",
        "ESPADAS 0.25CM X 0.20CM.png",
        "ESTATUA 0.30CM.png",
        "2 adornos cisne.png",
        "2 bases de velador angelitos.png",
        "2 jarras cerveceras con manijas.png",
        "2 jarras cerveceras grandes y 2 chicas.png",
        "2 jarras cerveceras plateadas.png",
        "2 portavelas ceramica.png",
        "6 jarras cerveceras.png",
        "cajonera y baulera cabecera de cama 0.90 x 0.40 .png",
        "escritorio 1.20 x 0.80 .png",
        "fuente decorativa .png",
        "jarra y 5 vasos cerveceros .png",
        "jarron chino.png",
        "jarron floreado.png",
        "jarron plateado.png",
        "juego de platil.png",
        "mide temperatura humedad y vientos.png",
        "paraguero de ceramica.png",
        "percha valet de madera oscura.png",
        "percha valet madera clara.png",
        "porcelana limoge .png",
        "potiche ceramica.png",
        "potiche plateado con base.png"
    ];  
        
    // 1. Seleccionar el contenedor principal
    const catalogoContainer = document.querySelector(".catalogo-container");

    // 2. Recorrer el array y crear el HTML para cada producto
    nombresFotos.forEach(nombreArchivo => {

        // Construir la ruta completa de la imagen
        const pathFoto = `Fotos/${nombreArchivo}`;

        // Obtener el nombre sin extensi�n (ej: "Silla.png" -> "Silla")
        // Este m�todo funciona incluso si el nombre tiene puntos (ej: "Silla.v2.png" -> "Silla.v2")
        const nombreProducto = nombreArchivo.substring(0, nombreArchivo.lastIndexOf('.')) || nombreArchivo;

        // Crear el bloque HTML para este producto (�SIN PRECIO!)
        // Nota: Tambi�n he actualizado el link de WhatsApp para que use el nombre del producto
        const productoHTML = `
        <section class="producto-card">
            <div class="producto-imagen">
                <img src="${pathFoto}"
                     alt="${nombreProducto}"
                     data-fullsrc="${pathFoto}">
            </div>
            <div class="producto-info">
                <h2 class="producto-nombre">${nombreProducto}</h2>
                
                <a href="https://wa.me/+5493415460211?text=Hola!%20Me%20interesa%20el%20producto%20${encodeURIComponent(nombreProducto)}" class="producto-wsp" target="_blank">
                    Consultar por WhatsApp
                </a>
            </div>
            <div class="scroll-prompt">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        </section>
        `;

        // 3. Insertar el nuevo producto en el contenedor
        catalogoContainer.innerHTML += productoHTML;
    });


    // ======================================================
    // --- C�DIGO ORIGINAL DEL LIGHTBOX (AHORA SE EJECUTA DESPU�S) ---
    // ======================================================

    // 1. Seleccionar los elementos del DOM del Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cerrarBtn = document.querySelector(".lightbox-cerrar");

    // Selecciona TODAS las im�genes de producto (que acabamos de crear)
    const imagenesProducto = document.querySelectorAll(".producto-imagen img");

    // 2. Funci�n para abrir el Lightbox (sin cambios)
    function abrirLightbox(e) {
        const imgElement = e.currentTarget;
        const fullSrc = imgElement.dataset.fullsrc || imgElement.src;
        lightboxImg.src = fullSrc;
        lightbox.classList.add("visible");
    }

    // 3. Funci�n para cerrar el Lightbox (sin cambios)
    function cerrarLightbox() {
        lightbox.classList.remove("visible");
        lightboxImg.src = "";
    }

    // 4. Asignar los Eventos

    // A cada imagen de producto, le asignamos el clic para ABRIR
    imagenesProducto.forEach(img => {
        img.addEventListener("click", abrirLightbox);
    });

    // Al bot�n 'X' le asignamos el clic para CERRAR
    cerrarBtn.addEventListener("click", cerrarLightbox);

    // Tambi�n cerramos si el usuario hace clic FUERA de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            cerrarLightbox();
        }
    });

});