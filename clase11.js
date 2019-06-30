//Estructura de control
//Condicionales

var brandon = {
  nombre :'Brandon',
  apellido :'Vargas',
  edad : 18,
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

//Indicar una constante
const MAYORIA_DE_EDAD = 18
  
function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

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
