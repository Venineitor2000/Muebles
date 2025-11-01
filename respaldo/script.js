// Espera a que todo el contenido de la página (HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // 1. Seleccionar los elementos del DOM
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cerrarBtn = document.querySelector(".lightbox-cerrar");

    // Selecciona TODAS las imágenes de producto
    const imagenesProducto = document.querySelectorAll(".producto-imagen img");

    // 2. Función para abrir el Lightbox
    function abrirLightbox(e) {
        // 'e.currentTarget' es la imagen que se clickeó
        const imgElement = e.currentTarget;

        // Buscamos la imagen de alta resolución en 'data-fullsrc'
        // Si no existe, usa la misma imagen (src)
        const fullSrc = imgElement.dataset.fullsrc || imgElement.src;

        lightboxImg.src = fullSrc; // Asigna la imagen al visor
        lightbox.classList.add("visible"); // Muestra el lightbox
    }

    // 3. Función para cerrar el Lightbox
    function cerrarLightbox() {
        lightbox.classList.remove("visible"); // Oculta el lightbox
        lightboxImg.src = ""; // Limpia la imagen (buena práctica)
    }

    // 4. Asignar los Eventos

    // A cada imagen de producto, le asignamos el clic para ABRIR
    imagenesProducto.forEach(img => {
        img.addEventListener("click", abrirLightbox);
    });

    // Al botón 'X' le asignamos el clic para CERRAR
    cerrarBtn.addEventListener("click", cerrarLightbox);

    // También cerramos si el usuario hace clic FUERA de la imagen (en el fondo)
    lightbox.addEventListener("click", (e) => {
        // Si el clic fue en el fondo (lightbox) y no en la imagen...
        if (e.target === lightbox) {
            cerrarLightbox();
        }
    });

});