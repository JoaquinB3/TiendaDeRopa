document.getElementById("carritoIcono").addEventListener("click", function() {

    document.getElementById("carritoIcono").style.display = "none";
    document.getElementById("desplegableCarrito").style.display = "block";
});

document.getElementById("cerrarCarrito").addEventListener("click", function(event) {
    event.stopPropagation();

    document.getElementById("carritoIcono").style.display = "block";
    document.getElementById("desplegableCarrito").style.display = "none";
});

    