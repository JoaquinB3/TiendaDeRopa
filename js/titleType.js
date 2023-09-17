document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    // Función para comprobar si el elemento está en el área visible de la página
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      console.log(rect);
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Función que se ejecutará cuando se desplace la página
    function handleScroll() {
      if (isInViewport(typingText)) {
        // Si el elemento está en el área visible, activa la animación
        typingText.classList.add = "typing-text-animation";
        typingText.style.display = "block" // Establece el ancho deseado para mostrar todo el texto
        // Deja de escuchar el evento scroll para evitar que la animación se repita
        window.removeEventListener("scroll", handleScroll);
      }
      else{
        typingText.classList.remove = "typing-text-animation"
        typingText.style.display = "none"
      }
    }
  
    // Agrega un oyente de eventos para el desplazamiento
    window.addEventListener("scroll", handleScroll);
  });