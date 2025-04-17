document.addEventListener('DOMContentLoaded', function() {
    // Modal de Contacto
    const modal = document.getElementById('modalContacto');
    const btnContacto = document.getElementById('btnContacto');
    const btnHeroContacto = document.getElementById('btnHeroContacto');
    const cerrarModal = document.querySelector('.cerrar-modal');

    function abrirModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Bloquear scroll
    }

    function cerrarModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    btnContacto.addEventListener('click', abrirModal);
    btnHeroContacto.addEventListener('click', abrirModal);
    cerrarModal.addEventListener('click', cerrarModalFunc);

    window.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModalFunc();
    });

    // Filtros Galería
    const filtros = document.querySelectorAll('.filtro-btn');
    const itemsGaleria = document.querySelectorAll('.galeria-item');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            // Actualizar botones activos
            filtros.forEach(f => f.classList.remove('active'));
            filtro.classList.add('active');

            // Filtrar items
            const categoria = filtro.dataset.categoria;
            
            itemsGaleria.forEach(item => {
                if (categoria === 'todos' || item.dataset.categoria === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox Galería
    const lightbox = document.getElementById('lightbox');
    const imagenLightbox = document.getElementById('imagen-lightbox');
    const captionLightbox = document.querySelector('.lightbox-caption');
    const cerrarLightbox = document.querySelector('.cerrar-lightbox');
    const botonesVer = document.querySelectorAll('.btn-ver');

    botonesVer.forEach(boton => {
        boton.addEventListener('click', function() {
            const item = this.closest('.galeria-item');
            const imgSrc = item.querySelector('img').src;
            const titulo = item.querySelector('h3').textContent;
            
            imagenLightbox.src = imgSrc;
            captionLightbox.textContent = titulo;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    cerrarLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});