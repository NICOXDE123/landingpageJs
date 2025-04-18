document.addEventListener('DOMContentLoaded', function() {

    // -------------------------------
    // MODAL DE CONTACTO
    // -------------------------------

    const modal = document.getElementById('modalContacto'); // El contenedor del modal
    const btnContacto = document.getElementById('btnContacto'); // Botón del menú
    const btnHeroContacto = document.getElementById('btnHeroContacto'); // Botón en la sección hero
    const cerrarModal = document.querySelector('.cerrar-modal'); // Botón X para cerrar el modal

    // Abre el modal y bloquea el scroll del fondo
    function abrirModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Cierra el modal y restaura el scroll
    function cerrarModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Eventos para abrir el modal desde diferentes botones
    btnContacto.addEventListener('click', abrirModal);
    btnHeroContacto.addEventListener('click', abrirModal);

    // Evento para cerrar el modal con la X
    cerrarModal.addEventListener('click', cerrarModalFunc);

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModalFunc();
    });

    // -------------------------------
    // VALIDACIÓN DE FORMULARIO
    // -------------------------------

    const form = document.getElementById('formContacto');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe normalmente

        // Obtener valores de los campos
        const nombre = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const mensaje = this.querySelector('textarea');

        // Validar que todos los campos estén completos
        if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validar formato de email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Si todo está correcto:
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        this.reset(); // Limpiar el formulario
        cerrarModalFunc(); // Cerrar el modal
    });

    // -------------------------------
    // FILTROS DE GALERÍA
    // -------------------------------

    const filtros = document.querySelectorAll('.filtro-btn'); // Botones de filtro
    const itemsGaleria = document.querySelectorAll('.galeria-item'); // Todas las imágenes

    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            // Elimina la clase activa de todos los filtros
            filtros.forEach(f => f.classList.remove('active'));
            // Agrega clase activa al filtro clickeado
            filtro.classList.add('active');

            const categoria = filtro.dataset.categoria; // Obtener la categoría seleccionada

            // Mostrar/ocultar imágenes según la categoría
            itemsGaleria.forEach(item => {
                if (categoria === 'todos' || item.dataset.categoria === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // -------------------------------
    // LIGHTBOX (AMPLIAR IMÁGENES)
    // -------------------------------

    const lightbox = document.getElementById('lightbox'); // Contenedor del lightbox
    const imagenLightbox = document.getElementById('imagen-lightbox'); // Imagen en grande
    const captionLightbox = document.querySelector('.lightbox-caption'); // Título/caption
    const cerrarLightbox = document.querySelector('.cerrar-lightbox'); // Botón X
    const botonesVer = document.querySelectorAll('.btn-ver'); // Botones "Ampliar"

    // Al hacer clic en cualquier botón "Ampliar"
    botonesVer.forEach(boton => {
        boton.addEventListener('click', function() {
            const item = this.closest('.galeria-item'); // Contenedor de la imagen
            const imgSrc = item.querySelector('img').src; // Ruta de la imagen
            const titulo = item.querySelector('h3').textContent; // Título del proyecto

            // Mostrar datos en el lightbox
            imagenLightbox.src = imgSrc;
            captionLightbox.textContent = titulo;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar lightbox con el botón X
    cerrarLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});
