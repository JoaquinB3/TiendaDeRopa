const nueva_coleccion = document.getElementById('container-collection');

const prod_nueva_collecion=[
    buzo={
        img:"",
        name:"Hoodie TotalBlack",
        url:"#",
        price:"50000"
    },
    pantalon={
        img:"",
        name:"Pant TotalBlack",
        url:"#",
        price:"30000"
    },
    remera={
        img:"",
        name:"Remera Oversize TotalBlack",
        url:"#",
        price:"15000"
    }
];

prod_nueva_collecion.forEach(item=> {
    const div=document.createElement('div');
    div.classList.add("new-collection-card");
    div.innerHTML=`
        <div>
        <img src=${item.img}>
        </div>
        <a href=${item.url}>
            <h3>${item.name}</h3>
            <h4>${item.price}</h4>
        </a>
    `
    nueva_coleccion.appendChild(div);
});