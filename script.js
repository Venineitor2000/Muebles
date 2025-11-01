// Espera a que todo el contenido de la página (HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // --- NUEVA SECCIÓN: GENERACIÓN DINÁMICA DE PRODUCTOS ---
    // ======================================================

    /**
     * ¡Aquí defines tu catálogo!
     * Simplemente agrega los nombres de archivo de tus imágenes.
     * Asegúrate de que estas imágenes existan en la carpeta "Fotos/"
     */
    const nombresFotos = [
        "BARRA DE BAR DE 1.60MT X 1MT.png",
        "COMODA CON CAJONES Y VIDRIO ARRIBA 1.30MTS X 0.5CM.png",
        "1 (3).png",
        "1 (4).png",
        "1 (5).png",
        "1 (6).png",
        "1 (7).png",
        "1 (8).png",
        "1 (9).png",
        "1 (10).png",
        "1 (11).png",
        "1 (12).png",
        "1 (13).png",
        "1 (14).png",
        "1 (15).png",
        "1 (16).png",
        "1 (17).png",
        "1 (18).png",
        "1 (19).png",
        "1 (20).png",
        "1 (21).png",
        "1 (22).png",
        "1 (23).png",
        "1 (24).png",
        "1 (25).png",
        "1 (26).png",
        "1 (27).png",
        "1 (28).png",
        "1 (29).png",
        "1 (30).png",
        "1 (31).png",
        "1 (32).png",
        "1 (33).png",
        "1 (34).png",
        "1 (35).png",
        "1 (36).png",
        "1 (37).png",
        "1 (38).png",
        "1 (39).png",
        "1 (40).png",
        "1 (41).png",
        "1 (42).png",
        "1 (43).png",
        "1 (44).png",
        "1 (45).png",
        "1 (46).png",
        "1 (47).png",
        "1 (48).png",
        "1 (49).png",
        "1 (50).png",
        "1 (51).png"
        // Añade más fotos aquí si es necesario
    ];

    // 1. Seleccionar el contenedor principal
    const catalogoContainer = document.querySelector(".catalogo-container");

    // 2. Recorrer el array y crear el HTML para cada producto
    nombresFotos.forEach(nombreArchivo => {

        // Construir la ruta completa de la imagen
        const pathFoto = `Fotos/${nombreArchivo}`;

        // Obtener el nombre sin extensión (ej: "Silla.png" -> "Silla")
        // Este método funciona incluso si el nombre tiene puntos (ej: "Silla.v2.png" -> "Silla.v2")
        const nombreProducto = nombreArchivo.substring(0, nombreArchivo.lastIndexOf('.')) || nombreArchivo;

        // Crear el bloque HTML para este producto (¡SIN PRECIO!)
        // Nota: También he actualizado el link de WhatsApp para que use el nombre del producto
        const productoHTML = `
        <section class="producto-card">
            <div class="producto-imagen">
                <img src="${pathFoto}"
                     alt="${nombreProducto}"
                     data-fullsrc="${pathFoto}">
            </div>
            <div class="producto-info">
                <h2 class="producto-nombre">${nombreProducto}</h2>
                
                <a href="https://wa.me/+5493415487108?text=Hola!%20Me%20interesa%20el%20producto%20${encodeURIComponent(nombreProducto)}" class="producto-wsp" target="_blank">
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