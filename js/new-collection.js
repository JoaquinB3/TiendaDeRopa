const nueva_coleccion = document.getElementById('container-collection');

const prod_nueva_collecion=[
    buzo={
        img:"//acdn.mitiendanube.com/stores/615/036/products/eea46a04-0085-4276-92cd-dceb1a635e261-a52878276ab07d3ef316831335808291-240-0.webp",
        img2:"//acdn.mitiendanube.com/stores/615/036/products/be16762c-8c0f-4de2-a732-3257fa7aaf961-8e6ac75472439049ec16831335807260-240-0.webp",
        name:"Hoodie Easy Come",
        url:"#",
        price:"50000"
    },
    pantalon={
        img:"//acdn.mitiendanube.com/stores/615/036/products/img_30411-70990d4aac38ff45e716842437670945-240-0.webp",
        img2:"//acdn.mitiendanube.com/stores/615/036/products/img_30441-8d2a0051252540c5fc16842437669820-240-0.webp",
        name:"Jogger Power de Jean",
        url:"#",
        price:"30000"
    },
    remera={
        img:"//acdn.mitiendanube.com/stores/615/036/products/img_1316-648351622afaacd7eb169939575452201-e6d338b641adaef99016993957768090-240-0.webp",
        img2:"//acdn.mitiendanube.com/stores/615/036/products/img_1302-718eb962566c3b1df116993957573938-240-0.webp",
        name:"Remera Oversize Mickey",
        url:"#",
        price:"15000"
    }
];

prod_nueva_collecion.forEach(item=> {
    const div=document.createElement('div');
    div.classList.add("new-collection-card");
    div.innerHTML=`
        <div class="container-img-new-collection">
            <div class="image-wrapper">
                <img src=${item.img} class="original-image">
                <img src=${item.img2} class="hover-image">
            </div>    
        <i class="fa-regular fa-heart"></i>
        </div>
        <div class="item-info">
            <a href=${item.url}>
                <h3>${item.name}</h3>
                <h4>$${item.price}</h4>
            </a>
        </div>
    `
    nueva_coleccion.appendChild(div);
});