// Función para iluminar el enlace del menú correspondiente a la sección visible
function iluminarEnlaceMenu() {
    const enlaces = document.querySelectorAll('nav a');
    const secciones = document.querySelectorAll('section');
  
    // Recorrer todas las secciones y comprobar cuál está visible
    secciones.forEach((seccion, indice) => {
      const rectSeccion = seccion.getBoundingClientRect();
      if (rectSeccion.top <= window.innerHeight / 2 && rectSeccion.bottom >= window.innerHeight / 2) {
        // La sección está visible, iluminar el enlace correspondiente
        enlaces.forEach(enlace => enlace.classList.remove('active'));
        enlaces[indice].classList.add('active');
      }
    });
  }
  
  // Evento para iluminar el enlace al hacer scroll
  window.addEventListener('scroll', iluminarEnlaceMenu);
  
  // Llamar a la función para iluminar el enlace al cargar la página
  iluminarEnlaceMenu();