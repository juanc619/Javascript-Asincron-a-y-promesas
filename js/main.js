
// console.log("Hola!!");

// setTimeout(() => {
//     console.log("plop!")
// }, 4000);

// console.log("Chau");

// let contador = 0;

// const intervalo = setInterval(() => {
//     contador++;
//     console.log(contador);

//     if (contador === 5) {
//         clearInterval(intervalo);
//         console.log("El contador se freno");
//     }
// }, 1000);

const eventoFuturo = (res) => {
    return new Promise ((resolve, reject) => {
        if (res === true) {
            resolve("Promesa resuelta");
        } else {
            reject("Promesa rechazada");
        }
    })
}

const valor = true;

console.log(eventoFuturo(valor) );