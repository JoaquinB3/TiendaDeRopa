document.addEventListener("DOMContentLoaded", function() { 

    let productsId = document.getElementById('products-id'); // Agregar para obtener el elemento con ID
    let containerCart = document.querySelector('.container-productos');
    let containerCartCarrito = document.querySelector('.card-items');

    let priceTotal = document.querySelector('.price-total');
    let amountProduct = document.querySelector('.count-product');

    const cartIcon = document.querySelector('.cart');
    cartIcon.addEventListener('click', showCart);

    
    let itemsBuy = []; //array para almacenar productos dentro del carrito
    let totalCard = 0;//precio total
    let countProduct = 0;

    // Funciones
    //abro y cierro el carrito
      
    const closeButton = document.querySelector('.close-btn');
        closeButton.addEventListener('click', function() {
        showCart(); 
    });

    function showCart() {
        if (productsId.style.display === "none" || productsId.style.display === "") {
            productsId.style.display = "block";
        } else {
            productsId.style.display = "none";
        }
    }

    
    
    //agrego, elimino productos y vacio el carrito completo
    
    //eventos 

    events();

    function events() {
        if (containerCart) {
            containerCart.addEventListener('click', addToCart);    
        }
        if (containerCartCarrito) {
            containerCartCarrito.addEventListener('click', removeProduct);    
        }
    }


    //agrego uno
    function addToCart() {
        if (p.target.classList.contains('button-card')) {
            const selectProduct = p.target.parentElement;
            readTheContent(selectProduct);
        }
    }

    //elimino uno
    function removeProduct(p) {
        if (p.target.classList.contains('delete-product')) {
            const deleteId = p.target.getAttribute('data-id');

            itemsBuy.forEach(value => {
                if (value.id == deleteId) {
                    let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                    totalCard = totalCard - priceReduce;
                    totalCard = totalCard.toFixed(2);
                }
            });

            itemsBuy = itemsBuy.filter(product => product.id !== deleteId);
            countProduct--;
        }

        if (itemsBuy.length === 0) {
            priceTotal.innerHTML = 0;
            amountProduct.innerHTML = 0;
        }
        loadHtml();
    }


    function readTheContent(product) {
        const infoProduct = {
            image: product.querySelector('div img').src,
            title: product.querySelector('.title').textContent,
            price: product.querySelector('div p span').textContent,
            id: product.querySelector('a').getAttribute('data-id'),
            amount: 1
        }

        totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
        totalCard = totalCard.toFixed(2);

        const exist = itemsBuy.some(product => product.id ===infoProduct.id);
        if(exist) {
            const pro = itemsBuy.map(product => {
                if (product.id === infoProduct.id) {
                    product.amount++;
                    return product;
                } else {
                    return product;
                }
            });
            itemsBuy = [...pro];
        } else {
            itemsBuy = [...itemsBuy, infoProduct]
            countProduct++;
        }
        loadHtml();
    }

    function loadHtml() {
        clearHtml();
        itemsBuy.forEach(product => {
            const {image, title, price, amount, id} = product;
            const row = document.createElement('div');
            row.classList.add('item');
            row.innerHTML = `
                <img src="${image}" alt="">
                <div class="item-content">
                    <h5>${title}</h5>
                    <h5 class="cart-price">${price}$</h5>
                    <h6>amount: ${amount}</h6>
                </div>
                <span class="delete-product" data-id="${id}">X</span>    
            `;

            containerCartCarrito.appendChild(row);
            priceTotal.innerHTML = totalCard;
            amountProduct.innerHTML = countProduct;

        });
    }

    function clearHtml() {
        containerCartCarrito.innerHTML = '';
    }

});