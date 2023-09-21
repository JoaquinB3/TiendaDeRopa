const filtroCategoria = document.querySelector('filtro_categoria'); 
const filtro_valor = document.querySelector('value');

filtro_valor.addEventListener('click', function(){
    categoria_filtrada = filtro,
    console.log(categoria_filtrada);
});


const productos_filtrados = stock.filter(item => item.categoria === categoria_filtrada);
    console.log(productos_filtrados);











// const contenedor_productos = document.getElementById('container-productos');
// const filtroCategoria = document.getElementById('filtro_categoria');

// function mostrarProductosFiltrados() {
//   const categoriaSeleccionada = filtroCategoria.value;
//   console.log(categoriaSeleccionada);

//   contenedor_productos.innerHTML = "";

//   stock.forEach(item => {
//     if (categoriaSeleccionada === "todas" || item.categoria === categoriaSeleccionada) {
//       const product = document.createElement('div');
//       product.classList.add("product-card");
//       product.innerHTML = `
//         <img src=${item.img} class="img-card"/>
//         <div class="content-card">
//           <h2>${item.categoria}</h2>
//           <h3>${item.marca}</h3>
//           <p>$${item.precio}</p>
//           <button class="button-card">Agregar al carrito</button>
//         </div>
//       `;
//       contenedor_productos.appendChild(product);
//     }
//   });
// }

// filtroCategoria.addEventListener('change', mostrarProductosFiltrados);

// mostrarProductosFiltrados();

// const cateforia_seleccionada = stock.filter(item => item.precio<40000);
// console.log(itemRec);
