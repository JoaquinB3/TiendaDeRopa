// aplico filtros a la categoria

const opcionesFiltroCategoria = document.querySelectorAll(".opcion_filtro");
const container_producto = document.getElementById('container-productos');
const opcionesFiltroMarca = document.querySelectorAll(".opcion_filtroMarca");

//filtro por categoria
 
function aplicarFiltroCategoria(categoriaSeleccionada) {
  container_producto.innerHTML = ""; // Limpia el contenedor

//trato de convinar los dos filtros
  stock.forEach(item => {
    //aplico el primer filtro, por categoria
    if (categoriaSeleccionada === "todasCategorias" || item.categoria === categoriaSeleccionada) {

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
        container_producto.appendChild(product);
    
    } 
  });
}

//filtro marca

function aplicarFiltroMarca(marcaSeleccionada) {
    container_producto.innerHTML = ""; // Limpia el contenedor
  
  //trato de convinar los dos filtros
    stock.forEach(item => {
      //aplico el primer filtro, por categoria
      if (marcaSeleccionada === "todasMarcas" || item.marca === marcaSeleccionada) {
  
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
          container_producto.appendChild(product);
  
      }
    });
  }


opcionesFiltroMarca.forEach(opcion => {
    opcion.addEventListener("click", function(evento) {
        const valorAtributoMarca = evento.target.getAttribute("value");

        if(valorAtributoMarca === "todasMarcas") {
            cargarTodosLosProductos();
        } else {
            aplicarFiltroMarca(valorAtributoMarca);
        }

    });
});

opcionesFiltroCategoria.forEach(opcion => {
    opcion.addEventListener("click", function(event) {
        const valorAtributo = event.target.getAttribute("value");
    
        if (valorAtributo === "todasCategorias") {
        //si es todos cargo todos los productos
        cargarTodosLosProductos();
        } else {
        // Aplico el filtro con la categoría seleccionada
        aplicarFiltroCategoria(valorAtributo);
        }

  });
});

//chequeo cuantos filtros hay activos
chequeOpciones.forEach(opcion => {
    opcion.addEventListener("click", funcion(saberCantidad));
        const cantidadFiltros = saberCantidad.target.getAttribute("")
});

function aplicarFiltros(aplicarFiltroCategoria, aplicarFiltroMarca){

    stock.forEach( opcion => {

        if(categoriaSeleccionada === "todasCategorias" || opcion.categoria === categoriaSeleccionada && marcaSeleccionada === "todasMarcas" || opcion.marca === marcaSeleccionada){
            aplicarFiltroCategoria();
            aplicarFiltroMarca();
        }

    });
}












