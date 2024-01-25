const newProductPage = document.getElementById('container-product-page');

const div=document.createElement('div');
div.classList.add("new-collection-page");
div.innerHTML=`
    <div class="container-img-page">
        <div class="imagen-product-page">
            <img src=${item.img} class="img-page">
        </div>
    </div>
    <div class="container-info-page">
        <h2 class="titulo-categoria">${item.categoria}</h2>
        <h3 class="titulo-producto">${item.categoria}</h3>
        <p class="detalle-p-page">${item.detalle}</p>
        <div class="container-colors-page">
            <a class="color-p-page"></a>
            <a class="color-p-page"></a>
            <a class="color-p-page"></a>
        </div>
        <div class="sub-container-info-page">
            <span class="precio-p-page">${item.precio}</h4>
            <button class="boton-p-page">Comprar</button>
        </div>
    </div>
`
