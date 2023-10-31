let filter = {
  categoria:"all",
  precioMin:0,
  precioMax:100000,
  marca:"all"
};

//filtrado
const filtrado=(stock)=>{
  return stock.filter(product=>{
    return (
      (filter.categoria==="all" || filter.categoria===product.categoria) &&
      (product.precio >= filter.precioMin) &&
      (product.precio <= filter.precioMax) &&
      (filter.marca==="all" || filter.marca===product.marca)
    );
  });
}


const mostrarFiltradoStock=()=>{
  const filtradoStock= filtrado(stock);
  containerProducto.innerHTML = "";

  filtradoStock.forEach(item => {
    const product = document.createElement('div');
    product.classList.add("product-card");
    product.innerHTML = `
      <img src=${item.img} class="img-card"/>
      <div class="content-card">
        <h2>${item.nombre}</h2>
        <h3>${item.marca}</h3>
        <p>$${item.precio}</p>
        <button class="button-card">Agregar al carrito</button>
      </div>
    `;
    containerProducto.appendChild(product);
  });
}


//recupoero valores a filtrar
const inputs = document.querySelectorAll('.opcion_filtro');
let contador_precioMin = document.getElementById('contadorPrecioMin');
let contador_precioMax = document.getElementById('contadorPrecioMax');


Array.from(inputs).forEach(input => {

  input.addEventListener('input', ()=>{

    const labelRecuperado =input.labels[0];
    
    const labels = document.querySelectorAll('.filtroSeleccionado');
    labels.forEach(label => {
      label.classList.remove('filtroSeleccionado');
    });


    if(input.name==="categoria"){
      const valorCategoria = input.value;  
      filter.categoria=valorCategoria;
      mostrarFiltradoStock();
      if (labelRecuperado !== "all") {
        labelRecuperado.classList.add("filtroSeleccionado");
      }
    }

    if(input.name==="precioMin"){
      const valorPrecio = input.value;
      contador_precioMin.innerHTML = `$ ${valorPrecio}`;
      filter.precioMin=valorPrecio;
      mostrarFiltradoStock();
    }

    if(input.name==="precioMax"){
      const valorPrecio = input.value;
      contador_precioMax.innerHTML = `$ ${valorPrecio}`;
      filter.precioMax=valorPrecio;
      mostrarFiltradoStock();
    }

    if(input.name==="marca"){
      const valorMarca = input.value;
      filter.marca=valorMarca;
      mostrarFiltradoStock();
      if (labelRecuperado !== "all") {
        labelRecuperado.classList.add("filtroSeleccionado");
      }
    }

  });

});

