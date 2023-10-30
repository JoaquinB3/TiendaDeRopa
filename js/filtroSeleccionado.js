const filtro_recuperado = document.querySelectorAll(label);

Array.from(filtro_recuperado).forEach(input => {

    input.addEventListener('change', ()=>{
        input.classList.add("filtroSeleccionado");
    });
  
});