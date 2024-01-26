const newProductPage = document.getElementById('container-product-page');




const div=document.createElement('div');
div.classList.add("container-product-page");
div.innerHTML=`
        <div class="container-img-page">
            <div class="imagen-product-page">
                <img src=${item.img} class="img-page">
            </div>
        </div>
        <div class="container-info-page">
            <div class="container-titulos-page">
                <h2 class="titulo-categoria">${item.categoria}</h2>
                <h3 class="titulo-producto">${item.categoria}</h3>
            </div>
            <div class="container-subinfo-page">
                <p class="detalle-p-page">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse quasi voluptate blanditiis facilis officia, ipsum omnis a labore</p>
                <div class="sub-container-info-page">
                    <span class="precio-p-page">${item.precio}</h4>
                    <button class="boton-p-page">Comprar</button>
                </div>
            </div>
        </div>
    `
    appendChild(div);    