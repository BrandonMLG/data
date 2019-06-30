//Estrucutura de datos
var brandon = {
  nombre: 'Brandon',
  apellido: 'Vargas',
  edad: 28,
  peso: 60
}

console.log(`Al inicio del año ${brandon.nombre} pesa: ${brandon.peso}`)

const INCREMENTO_PESO = .200
const DIAS_DEL_ANO = 365 

const aumentarDePeso = persona => persona.peso +=  INCREMENTO_PESO
const disminurDePeso = persona => persona.peso -= INCREMENTO_PESO



for(var i = 1; i<=DIAS_DEL_ANO; i++){
  var random = Math.random()
  if(random < 0.25){
    //Aumenta de peso
    aumentarDePeso(brandon)

  }else if (random < 0.50) {
    //Adelgazar
    disminurDePeso(brandon)
  }

}

console.log(`Al final del año ${brandon.nombre} pesa: ${brandon.peso.toFixed(2)}`);
