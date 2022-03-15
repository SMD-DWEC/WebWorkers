/**
 * Autor: Sergio Matamoros Delgado
 */
let contador = 0;

let myWorker = new Worker("js/rndFunction.js");

//Intervalo de 30 segundos...
setInterval(() => {
    myWorker.postMessage("a"); // Start the worker.
}, 30 * 1000);


//Cogemos el mensaje recibido...
myWorker.onmessage = function(event) {
    //Si un numero es mayor de 60 avisamos...
    if(event.data > 60) {
        console.info("Numero mayor que 60");
    }
    //Mostramos todos los numeros en consola
    console.log(event.data);

    //Mostramos en el DOM
    contador++;
    document.querySelector("span").textContent = "Número de mensajes recibidos: " + contador;
}