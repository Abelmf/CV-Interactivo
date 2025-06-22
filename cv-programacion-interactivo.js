// Selecciona todas las secciones desplegables (las que tienen la clase 'section-collapsible')
const secciones = document.querySelectorAll('.section-collapsible');

// Selecciona la foto de perfil por su clase
const foto = document.querySelector('.profile-pic');

// Oculta inicialmente todas las secciones desplegables (excepto el perfil profesional, que ya no es desplegable ni colapsable)
secciones.forEach(function(section) {
  section.style.opacity = "0";                    // Hace invisible la sección
  section.style.transition = "opacity 0.7s";      // Transición suave para el desvanecido
});

// Oculta la foto y le pone fondo azul claro igual que el borde
if (foto) {
  foto.style.opacity = "0";                                                      // La foto empieza invisible
  foto.style.transition = "opacity 0.8s";                                        // Transición suave para la foto
  foto.style.background = "#46B1C9";                                             // Fondo azul claro
  foto.style.boxShadow = "0 0 0 4px #46B1C9, 0 2px 8px rgba(70,177,201,0.11)";   // Borde azul igual que el CSS
}

// Hace aparecer progresivamente cada sección desplegable del currículum
function mostrarSeccionesProgresivamente() {
  secciones.forEach(function(section, i) {
    setTimeout(function() {
      section.style.opacity = "1";    // Hace visible la sección tras el retardo
      // Cuando sale la última sección, muestra la foto de perfil
      if (i === secciones.length - 1 && foto) {
        setTimeout(function() {
          foto.style.opacity = "1";   // Muestra la foto al final de la animación
        }, 900); // Un poco después de la última sección para que sea fluido
      }
    }, 500 * i); // 0.5 segundos entre cada sección
  });
}

// Ejecuta la función anterior cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", mostrarSeccionesProgresivamente);

// ------- Código de interacción desplegable abajo --------
secciones.forEach(function(section) {
  var btn = section.querySelector('.section-toggle');      // Botón que despliega/colapsa la sección
  var content = section.querySelector('.section-content'); // Contenido interno de la sección

  // Todas las secciones aparecen contraídas (colapsadas) al cargar la página
  section.classList.add('collapsed');
  btn.setAttribute('aria-expanded', 'false');
  content.style.display = "none";

  // Al hacer clic en el botón, alterna el estado desplegado/plegado
  btn.addEventListener('click', function() {
    var isCollapsed = section.classList.contains('collapsed');
    if (isCollapsed) {
      section.classList.remove('collapsed');
      btn.setAttribute('aria-expanded', 'true');
      content.style.display = "block";
    } else {
      section.classList.add('collapsed');
      btn.setAttribute('aria-expanded', 'false');
      content.style.display = "none";
    }
  });
});