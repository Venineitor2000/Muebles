// Espera a que todo el contenido de la página (HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // --- NUEVA SECCIÓN: GENERACIÓN DINÁMICA DE PRODUCTOS ---
    // ======================================================

    /**
     * ¡Aquí defines tu catálogo!
     * Modifica el 'precio' de cada producto.
     * --- NUEVO: Modifica 'vendido' a 'true' si el producto ya no está disponible ---
     */

    const catalogoProductos = [
        { archivo: "BARCITO BODEGA 0.60CM X 0.36.png", precio: "$ 180.000.-", vendido: false },
        { archivo: "BARRA DE BAR DE 1.60MT X 1MT.png", precio: "$ 230.000.-", vendido: false },
        { archivo: "BARRA DE BAR VISTA DESDE ATRAS.png", precio: "", vendido: false },
        { archivo: "VAJILLERO DE MADERA CON TAPA DE MARMOL DE 2.50 X 0.5.png", precio: "$ 270.000.-", vendido: true },
        { archivo: "VAJILLERO CHICO  CON TAPA MARMOL BLANCO 1.15MT X 0.32CM.png", precio: "$ 180.000.-", vendido: false },
        { archivo: "RACK DE TV 2.55MT X 0.60CM.png", precio: "$ 220.000.-", vendido: false },
        { archivo: "ESPEJO 2MTS X 1MT.png", precio: "$ 180.000.", vendido: false },
        { archivo: "ESPEJO BORDE LAQUEADO NEGRO 1MT X 0.6 CON REBORDE.png", precio: "$ 75.000.-", vendido: false },
        { archivo: "ESPEJO MADERA 1.35MTS X 0.89.png", precio: "$ 100.000.-", vendido: true },
        { archivo: "bahiut madera 2.20mt x 0.47 x 1.30 de alto.png", precio: "$ 220.000.-", vendido: false },
        { archivo: "BANQUETA TAPIZADA por 3 unidades.png", precio: "$ 40.000.-cada uno", vendido: false },
        { archivo: "ESCRITORIO ANTIGUO 1.30MT X 0.7CM.png", precio: "$ 150.000.-", vendido: true },
        { archivo: "RELOJ ANTIGUO DE PARED.png", precio: "$ 110.000.", vendido: true },
        { archivo: "JUEGO LIVING 1 SILLON 3 CUERPOS DE 1.80 X 0.90 X 0.80 Y DOS DE 1 CUERPO DE 0.77 X 0.90 X 0.83.png", precio: "$ 400.000.-", vendido: false },
        { archivo: "MESA DE VIDRIO COLOR HUMO 2MTS X 1MT.png", precio: "$ 220.000.-", vendido: false },
        { archivo: "ARAÑA COLGANNTE.png", precio: "$ 150.000.-", vendido: false },
        { archivo: "ARAÑA DE CAIRELES.png", precio: "$ 150.000.-", vendido: false },
        { archivo: "APLIQUE DE CAIRELES.png", precio: "$ 70.000.-", vendido: false },
        { archivo: "MESA RATONA DE MADERA ANTIGUA 0.57CM X 0.38CM.png", precio: "$ 90.000.-", vendido: false },
        { archivo: "MESA RATONA MADERA Y VIDRIO 0.90CM X 0.50CM.png", precio: "$ 75.000.-", vendido: false },
        { archivo: "MESA RATONA LAQUEADA CON MARMOL ARRIBA 1MT X 0.55CM.png", precio: "$ 110.000.-", vendido: false },
        { archivo: "MESA MADERA CON VIDRIO ARRIBA 1.90mt x 1 mt.png", precio: "$ 160.000.-", vendido: true },
        { archivo: "SILLA ANTIGUA TAPIZADA.png", precio: "$ 40.000.-", vendido: false },
        { archivo: "SILLA CON ESTERILLA.png", precio: "$ 50.000.-", vendido: true },
        { archivo: "SILLA DE MADERA TAPIZADA por 4 unidades.png", precio: "$ 50.000.-cada una", vendido: true },
        { archivo: "SILLON DE CABECERA por 2 unidades.png", precio: "$ 75.000.-cada uno", vendido: false },
        { archivo: "SILLA CON RESPALDO DE CUERO TALLADO por 2 unidades.png", precio: "$ 70.000.- cada una", vendido: false },
        { archivo: "SILLA DE MADERA LAQUEADA Y TAPIZADA por 6 unidades.png", precio: "$ 60.000.- cada una", vendido: false },
        { archivo: "SILLA MADERA Y CUERINA por 4 unidades.png", precio: "$ 30.000.-cada una", vendido: true },
        { archivo: "Silla estérillada por 6 unidades.png", precio: "$ 55.000.-cada una", vendido: false },
        { archivo: "SILLON INDIVIDUAL 0.77 x 0.90 x 0.83.png", precio: "$ 75.000.-", vendido: false },
        { archivo: "MESA LUZ MADERA CON TAPA MARMOL 0.50CM X 0.38CM.png", precio: "$ 70.000.-", vendido: false },
        { archivo: "BUTACA MADERA por 3 unidades.png", precio: "$ 20.000.-cada una", vendido: true },
        { archivo: "MESA MADERA 0.80 X 0.80 EXTENSIBLE A 1.60 MT.png", precio: "$ 120.000.-", vendido: false },
        { archivo: "MESA EXTENDIDA.png", precio: "", vendido: false },
        { archivo: "MESITA MADERA 0.40X 0.30X 0.67 DE ALTO.png", precio: "$ 60.000.-", vendido: false },
        { archivo: "MUEBLE BAR CON RUEDAS TAPA AZULEJO BLANCA 0.50 CM X 0.38CM X 0.83 CM.png", precio: "$ 100.000.-", vendido: false },
        { archivo: "MESA RATONA MARMOL Y HIERRO 0.50CM X 0.50CM.png", precio: "$ 70.000.-", vendido: false },
        { archivo: "SOMIER DOS PLAZAS 1,40 MT X 1,90 MT.png", precio: "$ 90.000.-", vendido: false },
        { archivo: "RESPALDO CAMA 2MTS.png", precio: "$ 100.000.-", vendido: true },
        { archivo: "SOMIER INDIVIDUAL CON COLCHON 1.90MTS X 0.80 MTS.png", precio: "$ 120.000.-", vendido: false },
        { archivo: "Cama con respaldo de una plaza con cama marinera abajo 2mt x 0.90cm.png", precio: "$ 140.000.-", vendido: false },
        { archivo: "CAJONERA 0.50CM X 0.38 CM.png", precio: "$ 30.000.-", vendido: true },
        { archivo: "COMODA CON CAJONES Y VIDRIO ARRIBA 1.30MTS X 0.5CM.png", precio: "$ 100.000.-", vendido: false },
        { archivo: "LAVARROPAS DREAM EXCELLENT CARGA FRONTAL 0.85CM X 0.60CM.png", precio: "$ 180.000.-", vendido: false },
        { archivo: "MESA COMPUTADORA 0.7CM X 0.53CM.png", precio: "$ 40.000.-", vendido: false },
        { archivo: "BIBLIOTECA 1.70MT DE ALTO X0.70CM X 0.50CM.png", precio: "$ 70.000.-", vendido: true },
        { archivo: "MESA TV 0.90CM X 0.60CM.png", precio: "$ 40.000.-", vendido: false },
        { archivo: "MESA TV MADERA 0.70CM X 0.43CM.png", precio: "$ 40.000.-", vendido: false },
        { archivo: "SILLON CAMA 1.45MTS X 0.90CM.png", precio: "$ 90.000.-", vendido: false },
        { archivo: "SILLON CAMA ABIERTO.png", precio: "", vendido: false },
        { archivo: "LAMPARA.png", precio: "$ 20.000.-", vendido: false },
        { archivo: "juego VELADOR POR DOS.png", precio: "$ 40.000.-", vendido: false },
        { archivo: "lampara de escritorio.png", precio: "$ 20.000.-", vendido: true },
        { archivo: "lampara de pie.png", precio: "$ 45.000.-", vendido: true },
        { archivo: "juego 2 bases de velador angelitos.png", precio: "$ 40.000.-", vendido: true },
        { archivo: "CUADRO ALJIBE.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "CUADRO BARCO.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "CUADRO JARRON.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "CUADRO MADONNA.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "CUADRO NATURALEZA MUERTA.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "CUADRO PAISAJE.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "CUADRO MUJER.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "cuadro naturaleza muerta apaisado.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "cuadro naturaleza muerta marco blanco.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "cuadro naturaleza muerta marco madera.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "cuadro paisaje marino.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "cuadro bosque marco madera.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "ESCUDO 025CM X 0.20 CM.png", precio: "$ 20.000.-", vendido: false },
        { archivo: "ESPADAS 0.25CM X 0.20CM.png", precio: "$ 20.000.-", vendido: false },
        { archivo: "ESTATUA 0.30CM.png", precio: "$ 35.000.-", vendido: false },
        { archivo: "juego 2 adornos cisne.png", precio: "$ 35.000.-", vendido: false },
        { archivo: "juego 2 jarras cerveceras con manijas.png", precio: "$ 30.000.-", vendido: false },
        { archivo: "juego 2 jarras cerveceras grandes y 2 chicas.png", precio: "$ 45.000.-", vendido: false },
        { archivo: "juego 2 jarras cerveceras plateadas.png", precio: "$ 30.000.-", vendido: false },
        { archivo: "juego 2 portavelas ceramica.png", precio: "$ 30.000.-", vendido: false },
        { archivo: "juego de 2 portavelas de cuerno.png", precio: "$ 40.000.-", vendido: false },
        { archivo: "juego 6 jarras cerveceras.png", precio: "$ 70.000.-", vendido: false },
        { archivo: "jarra de sangria y 5 vasos.png", precio: "$ 80.000.-", vendido: false },
        { archivo: "cajonera y baulera cabecera de cama 0.90 x 0.40 .png", precio: "$ 30.000.-", vendido: false },
        { archivo: "escritorio 1.20 x 0.80 .png", precio: "$ 70.000.-", vendido: false },
        { archivo: "fuente decorativa 0.30 x 0.64 .png", precio: "$ 40.000.-", vendido: false },
        { archivo: "jarron chino.png", precio: "$ 70.000.-", vendido: false },
        { archivo: "jarron floreado.png", precio: "$ 50.000.-", vendido: false },
        { archivo: "jarron plateado.png", precio: "$ 70.000.-", vendido: false },
        { archivo: "payaso lladro original.png", precio: "$ 35.000.-", vendido: false },  
        { archivo: "juego de platil.png", precio: "$ 180.000.-", vendido: false },
        { archivo: "paraguero de ceramica.png", precio: "$ 45.000.-", vendido: false },
        { archivo: "percha valet de madera oscura.png", precio: "$ 30.000.-", vendido: true },
        { archivo: "percha valet madera clara.png", precio: "$ 30.000.-", vendido: true },
        { archivo: "porcelana limoge original.png", precio: "$ 50.000.-", vendido: false },
        { archivo: "potiche ceramica.png", precio: "$ 25.000.-", vendido: false },
        { archivo: "potiche plateado con base.png", precio: "$ 30.000.-", vendido: false },
        { archivo: "espejo particionado 0.80x 0.7.png", precio: "$ 50.000.-", vendido: false },
        { archivo: "espejo cuadricula con estante 0.50 x 0.76.png", precio: "$ 40.000.-", vendido: true },
        { archivo: "espejo madera 1m x 0.55.png", precio: "$ 35.000.-", vendido: true }
        

    ];


    // 1. Seleccionar el contenedor principal
    const catalogoContainer = document.querySelector(".catalogo-container");

    // 2. Recorrer el NUEVO array y crear el HTML para cada producto
    catalogoProductos.forEach(producto => {

        // Extraemos los datos del objeto
        const nombreArchivo = producto.archivo;
        const precioProducto = producto.precio;
        const estaVendido = producto.vendido; // <-- OBTENEMOS EL NUEVO VALOR

        // Construir la ruta completa de la imagen
        const pathFoto = `Fotos/${nombreArchivo}`;

        // Obtener el nombre sin extensión (ej: "Silla.png" -> "Silla")
        const nombreProducto = nombreArchivo.substring(0, nombreArchivo.lastIndexOf('.')) || nombreArchivo;

        // Crear el bloque HTML para este producto (¡AHORA CON PRECIO!)
        const productoHTML = `
        <section class="producto-card">
            
            <div class="producto-imagen ${estaVendido ? 'vendido' : ''}">
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

    // (El resto del código del lightbox no necesita cambios)

    // 1. Seleccionar los elementos del DOM del Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cerrarBtn = document.querySelector(".lightbox-cerrar");

    // Selecciona TODAS las imágenes de producto (que acabamos de crear)
    const imagenesProducto = document.querySelectorAll(".producto-imagen img");

    // 2. Función para abrir el Lightbox (sin cambios)
    function abrirLightbox(e) {
        const imgElement = e.currentTarget;
        
        // --- MODIFICACIÓN: No abrir el lightbox si el producto está vendido ---
        // Buscamos el div padre '.producto-imagen' y vemos si tiene la clase 'vendido'
        if (imgElement.closest('.producto-imagen').classList.contains('vendido')) {
            return; // No hace nada si está vendido
        }
        
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