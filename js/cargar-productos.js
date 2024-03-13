const containerProducto = document.getElementById('container-productos');

const categoria = new URLSearchParams(window.location.search).get("category");

const allProducts = categoria ? stock.filter(producto => producto.categoria === categoria) : stock;

function cargarTodosLosProductos() {
  containerProducto.innerHTML = "";

  allProducts.forEach(item => {
    const product = document.createElement('div');
    product.classList.add("product-card");
    product.innerHTML = `
      <a href="product-page.html?id=${item.id}">
        <img src=${item.img} class="img-card"/>
        <div class="content-card">
          <h2 class="product-nombre">${item.nombre}</h2>
          <h3>${item.marca}</h3>
          <p>$${item.precio}</p>
          <button class="button-card">Agregar al carrito</button>
        </div>
      </a>

    `;
    containerProducto.appendChild(product);
  });
}

// Cargar todos los productos por defecto al cargar la página
cargarTodosLosProductos();

