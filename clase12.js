//Podemos asignar a una constante una Funcion

//Indicar una constante
const MAYORIA_DE_EDAD = 18

//const esMayorDeEdad = function (persona){
//  return persona.edad >= MAYORIA_DE_EDAD
//}

//oooooooooooooo
const esMayorDeEdad = persona =>
 persona.edad >= MAYORIA_DE_EDAD


const esMenorDeEdad = persona =>
  !esMayorDeEdad(persona)

var brandon = {
  nombre :'Brandon',
  apellido :'Vargas',
  edad : 12,
  ingeniero :true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false
}

var juan = {
  nombre : 'Juan',
  apellido: 'Mendez',
  edad: 31
}

function  permitirAcceso(persona){
  if (esMenorDeEdad(persona)) {
    console.log('ACCESO DENEGADO');
  }
}

//oo
const permitirAcceso = ({ edad }) => !esMayorDeEdad
({ edad }) ? console.log('Acceso denegado') :
 console.log('Adelante')
//Ejemplo
permitirAcceso(brandon)


//Imprimir si es mayor de edad
function imprimirSiEsMayorDeEdad(persona){
  console.log(`${persona.nombre} es:`);
  if (esMayorDeEdad(persona)) {
    console.log('Es mayor de edad');
  }else {
    console.log('No es mayor de edad');
  }
}


//Ejemplo
imprimirSiEsMayorDeEdad(brandon)
imprimirSiEsMayorDeEdad(juan)
