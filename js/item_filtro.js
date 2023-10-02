
const checkboxes = document.querySelectorAll('.opcion_filtro');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      const label = document.querySelector(`label[for="${this.id}"]`);
      
      if (this.checked) {
        label.classList.add('etiqueta-seleccionada');
      } else {
        label.classList.remove('etiqueta-seleccionada');
      }
    });
});