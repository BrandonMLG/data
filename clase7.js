//Objeto reune caracteristicas que tienen en comun
var brandon = {
  nombre: 'Brandon',
  apellido: 'Vargas',
  edad: 28
}

var juan = {
  nombre: 'Juan',
  apellido: 'Mendez',
  edad: 30
}

function imprimirNombreEnPantalla(persona){
  var {nombre} = persona //Declaramos varibale nombre que
  //Es igual al atributo persona.nombre
  console.log(nombre.toUpperCase())
}
imprimirNombreEnPantalla(juan)
imprimirNombreEnPantalla(brandon)

//Ejercicio imprimir: Hola me llamo brandon y tengo 27 años
function imprimirNombreYEdad(persona){
  var {nombre} = persona
  var {edad} = persona
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)
}

function imprimirNombreYEdad2(persona){
  var nombre = persona.nombre
  var edad = persona.edad
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)
}


imprimirNombreYEdad(brandon)
imprimirNombreYEdad2(brandon)
