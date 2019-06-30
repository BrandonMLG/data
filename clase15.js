//Estrucutura de datos

var contador = 0

const llueve = () => Math.random() < 0.25


//SE EJECUTA EL DO SI O SI!
do {
contador++
  //Si la condicion que esta dentro del while se
  //cumple se vuelve a ejecutar el codigo DO
}while(!llueve())

var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovia ${contador} ${frecuencia}`);
