// Espera a que todo el contenido de la p�gina (HTML) est� cargado
document.addEventListener("DOMContentLoaded", () => {

    // 1. Seleccionar los elementos del DOM
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const cerrarBtn = document.querySelector(".lightbox-cerrar");

    // Selecciona TODAS las im�genes de producto
    const imagenesProducto = document.querySelectorAll(".producto-imagen img");

    // 2. Funci�n para abrir el Lightbox
    function abrirLightbox(e) {
        // 'e.currentTarget' es la imagen que se clicke�
        const imgElement = e.currentTarget;

        // Buscamos la imagen de alta resoluci�n en 'data-fullsrc'
        // Si no existe, usa la misma imagen (src)
        const fullSrc = imgElement.dataset.fullsrc || imgElement.src;

        lightboxImg.src = fullSrc; // Asigna la imagen al visor
        lightbox.classList.add("visible"); // Muestra el lightbox
    }

    // 3. Funci�n para cerrar el Lightbox
    function cerrarLightbox() {
        lightbox.classList.remove("visible"); // Oculta el lightbox
        lightboxImg.src = ""; // Limpia la imagen (buena pr�ctica)
    }

    // 4. Asignar los Eventos

    // A cada imagen de producto, le asignamos el clic para ABRIR
    imagenesProducto.forEach(img => {
        img.addEventListener("click", abrirLightbox);
    });

    // Al bot�n 'X' le asignamos el clic para CERRAR
    cerrarBtn.addEventListener("click", cerrarLightbox);

    // Tambi�n cerramos si el usuario hace clic FUERA de la imagen (en el fondo)
    lightbox.addEventListener("click", (e) => {
        // Si el clic fue en el fondo (lightbox) y no en la imagen...
        if (e.target === lightbox) {
            cerrarLightbox();
        }
    });

});