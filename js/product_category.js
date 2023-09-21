const product_category = document.getElementById('productCard-container');

const categorias=[
    camperas={
        img:"https://media.revistagq.com/photos/633190d5a323b47f9b54000d/4:3/w_3295,h_2471,c_limit/1324252660",
        name:"Camperas",
        url:"http:/html/productos.html"
    },
    pantalones={
        img:"https://i.blogs.es/5ee9b7/tres-formas-de-lucir-los-pantalones-cargo-y-llevar-todo-contigo-esta-temporada/450_1000.webp",
        name:"Pantalones",
        url:"http:/html/productos.html"
    },
    remeras={
        img:"https://urbanmenshops.com/wp-content/uploads/2022/12/DSC00844-348x464.jpg",
        name:"Remeras",
        url:"http:/html/productos.html"
    }
];

categorias.forEach(item => {
    const div=document.createElement('div');
    div.classList.add("category_card");
    div.innerHTML=`
        <a href=${item.url} data-categoria="${item.name}">
            <img src=${item.img}>
            <h3>${item.name}</h3>
        </a>  
    `
    product_category.appendChild(div);
});