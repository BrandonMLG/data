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

//la variable n solo existe en la funcion
//Nota: Si declaramos una variable con el mismo imprimirNombreEnPantalla
//De una variable global esta solo existe localmente y // NOTE:
//Afectara a la variable global
function imprimirNombreEnPantalla(persona){
  //Accedemos a la variale nombre del objeto
  persona = persona.nombre.toUpperCase()
  console.log(persona)
}

//oooo
//Obtenemos el atributo del objeto que pasemos
function imprimirNombreEnPantalla2({nombre}){
  //Accedemos a la variale nombre del objeto
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnPantalla(juan)
imprimirNombreEnPantalla2(brandon)


//imprimirNombreEnPantalla2({brandon:nombre})
