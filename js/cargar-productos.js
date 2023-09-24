const containerProducto = document.getElementById('container-productos');

function cargarTodosLosProductos() {
  containerProducto.innerHTML = "";

  stock.forEach(item => {
    const product = document.createElement('div');
    product.classList.add("product-card");
    product.innerHTML = `
      <img src=${item.img} class="img-card"/>
      <div class="content-card">
        <h2>${item.categoria}</h2>
        <h3>${item.marca}</h3>
        <p>$${item.precio}</p>
        <button class="button-card">Agregar al carrito</button>
      </div>
    `;
    containerProducto.appendChild(product);
  });
}

// Cargar todos los productos por defecto al cargar la página
cargarTodosLosProductos();



// const categoria_seleccionada = stock.filter(item => item.precio<40000);
// console.log(itemRec);

//practicar foreach, find y findIndex, filter, some, if, map, set, slice, append, push, pop, fill, lenght, reduce*
