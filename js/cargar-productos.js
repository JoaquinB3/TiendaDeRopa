const containerProducto = document.getElementById('container-productos');

function cargarTodosLosProductos() {
  containerProducto.innerHTML = "";

  stock.forEach(item => {
    const product = document.createElement('div');
    product.classList.add("product-card");
    product.innerHTML = `
      <img src=${item.img} class="img-card"/>
      <div class="content-card">
        <h2 class="product-nombre">${item.nombre}</h2>
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

