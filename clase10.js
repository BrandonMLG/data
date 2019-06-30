//Estructura de control
//Condicionales

var brandon = {
  nombre :'Brandon',
  apellido :'Vargas',
  edad : 12 ,
  ingeniero :true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)
  if (persona.ingeniero==true) {
    console.log('Ingeniero')
  }else if (persona.cocinero == true) {
    console.log('Cocinero')
  }else if (persona.cantante == true){
     console.log('cantante')
  }else if (persona.dj ==true) {
    console.log('dj');
  }else if (persona.guitarrista ==true) {
    console.log('guitarrista');
  }
}

//Ejemplo
imprimirProfesiones(brandon)

//Imprimir si es mayor de edad
function imprimirSiEsMayorDeEdad(persona){
  console.log(`${persona.nombre} es:`);
  if (persona.edad > 18) {
    console.log('Es mayor de edad');
  }else {
    console.log('No es mayor de edad');
  }
}



imprimirSiEsMayorDeEdad(brandon)
