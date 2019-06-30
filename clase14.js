//Estrucutura de datos
var brandon = {
  nombre: 'Brandon',
  apellido: 'Vargas',
  edad: 28,
  peso: 60
}

console.log(`Al inicio del año ${brandon.nombre} pesa: ${brandon.peso}`)

const INCREMENTO_PESO = .3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso +=  INCREMENTO_PESO
const disminurDePeso = persona => persona.peso -= INCREMENTO_PESO
/*No recibe parametros*/
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


///IMPORTANTEEEE
const META = brandon.peso -3

var dias = 0
while (brandon.peso > META) {
  debugger
  if (comeMucho()) {
    //Aumenta de peso
    aumentarDePeso(brandon)
  }
  if(realizaDeporte()) {
    //Disminuye de peso
    disminurDePeso(brandon)
  }
  dias ++;
}

console.log(`Al final del año ${brandon.nombre} pesa: ${brandon.peso.toFixed(2)} en: ${dias} Dias`);
