const baseDeDatos = [
    { id: "silla", nombre: "Silla", precio: 150 },
    { id: "sillon", nombre: "Sillón", precio: 250 },
    { id: "puerta", nombre: "Puerta", precio: 350 },
    { id: "ventana", nombre: "Ventana", precio: 450 }
];

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos);
        }, 2000);
    })
}

let productos = [];

const lista = document.querySelector("#lista-productos");

function mostrarProductos(array) {

    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre} - ${item.precio}`

        lista.append(li);

    });
}

pedirProductos()
    .then((res) => {
        productos = res;
        mostrarProductos(productos);
    })