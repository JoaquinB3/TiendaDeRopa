let carrito = [] 

function agregarAlCarrito (productoID) {
    const productoCarrito = stock.find(prod => prod.id === productoID);
    if (productoCarrito) {
        carrito.push (productoCarrito);
        mostrarCarrito();
    }else{
        console.log ("El producto no existe");
    }
}

function eliminarDelCarrito (productoID) {
    const nuevoCarrito = carrito.filter(prod => prod.id !== productoID);
    carrito = nuevoCarrito;
}


function mostrarCarrito(){
    const mostrarProdCarrito = document.getElementById("productosCarrito");
    mostrarProdCarrito.innerHTML="";
    carrito.forEach(item => {
        const div=document.createElement('div');
        div.classList.add("prodCarrito");
        div.innerHTML=`
            <div class="containerPCarrito">
                <div class="containerImg"><img src=${item.img}></div>
                <h3 class="nombrePCarrito">${item.nombre}</h3>
                <span>$${item.precio}</span>
                <a href="#" id="cerrarCarrito"><i class="fa-solid fa-trash"></i></a>
            </div>
        `
        mostrarProdCarrito.appendChild(div); 
    });
}


const todosLosProductos = document.getElementById('container-productos');

todosLosProductos.addEventListener("click", (e)=>{
    if(e.target.classList.contains("button-card")){
        const producto = e.target.parentElement;
        const nombreProducto = producto.querySelector(".product-nombre").textContent;
        const productoStockEncontrado = stock.find(prod => prod.nombre === nombreProducto)
        
        if(productoStockEncontrado){
            const productoId = productoStockEncontrado.id;
            agregarAlCarrito(productoId);
            // console.log (carrito);
        }
    }
});






// const botonesAgregar = document.querySelectorAll('.button-card'); 

// const arrayBotonesAgregar = Array.from (botonesAgregar);

// console.log (arrayBotonesAgregar);

// arrayBotonesAgregar.forEach (boton =>{

//     boton.addEventListener ("click", (e)=> {
//         const productName = e
//     });

// });


// function recuperarIdProducto () {
    
// }

