
// console.log("Hola!!");

// setTimeout(() => {
//     console.log("plop!")
// }, 4000);

// console.log("Chau");

let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log(contador);

    if (contador === 5) {
        clearInterval(intervalo);
        console.log("El contador se freno");
    }
}, 1000);