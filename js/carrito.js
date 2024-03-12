let carrito = [] 

function agregarAlCarrito (productoID) {
    const productoCarrito = stock.find(prod => prod.id === productoID);
    if (productoCarrito) {
        carrito.push (productoCarrito);
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
                <div class="containerTacho"><i class="fa-solid fa-trash tachoProducto"></i></div>
            </div>
        `
        mostrarProdCarrito.appendChild(div); 
    });
}


const todosLosProductos = document.getElementById('container-productos');
const totalVenta = document.getElementById("totalVenta");
const cantCarrito = document.getElementById("cantCarrito")
let total=0;
let cantTotal=0;

todosLosProductos.addEventListener("click", (e)=>{
    if(e.target.classList.contains("button-card")){
        const producto = e.target.parentElement;
        const nombreProducto = producto.querySelector(".product-nombre").textContent;
        const productoStockEncontrado = stock.find(prod => prod.nombre === nombreProducto);

        if(productoStockEncontrado){
            const productoId = productoStockEncontrado.id;
            total += productoStockEncontrado.precio;
            totalVenta.textContent = total;
            cantTotal = carrito.length + 1;
            cantCarrito.textContent = cantTotal;
            agregarAlCarrito(productoId);
            mostrarCarrito();
            // console.log (carrito);
        }
    }
});

const todosLosTachos = document.getElementById("productosCarrito");

todosLosTachos.addEventListener("click", (i)=>{
    if(i.target.classList.contains("tachoProducto")){
        const producto = i.target.closest(".containerPCarrito");
        const nombreProducto = producto.querySelector(".nombrePCarrito").textContent;
        const productoStockEncontrado = stock.find(prod=> prod.nombre === nombreProducto);
    
        if(productoStockEncontrado){
            const productoId = productoStockEncontrado.id;
            total -= productoStockEncontrado.precio;
            totalVenta.textContent = total;
            cantTotal = carrito.length - 1;
            cantCarrito.textContent = cantTotal;
            eliminarDelCarrito(productoId);
            mostrarCarrito();
            // console.log(carrito);
        }else{
            console.log("El producto no se encontro");
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

