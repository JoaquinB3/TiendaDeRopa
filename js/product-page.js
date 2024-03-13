const newProductPage = document.getElementById('container-product-page');

const id = new URLSearchParams(window.location.search).get('id');

const product = stock.find(item => item.id === parseInt(id));

const div=document.createElement('div');
div.classList.add("container-product");
div.innerHTML=`
        <div class="container-img-page">
                <img src=${product.imgPng} class="img-page">
        </div>
        <div class="container-info-page">
            <div class="container-titulos-page">
                <h2 class="titulo-categoria">${product.categoria}</h2>
                <h3 class="titulo-producto">${product.nombre}</h3>
            </div>
            <div class="container-subinfo-page">
                <p class="detalle-p-page">Una remera increible de calvin klein para camuflarse en la arena. Ideal para cuando le vez el culo a una mina en la playa y te ve tu jermu</p>
                <div class="sub-container-info-page">
                    <span class="precio-p-page">$${product.precio}</h4>
                    <button class="boton-p-page">Comprar</button>
                </div>
            </div>
        </div>
    `
newProductPage.appendChild(div);    