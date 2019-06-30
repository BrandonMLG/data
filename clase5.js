var nombreBrandon ='Brandon'
var nombreDario = 'Dario'

//la variable n solo existe en la funcion
//Nota: Si declaramos una variable con el mismo imprimirNombreEnPantalla
//De una variable global esta solo existe localmente y // NOTE:
//Afectara a la variable global
function imprimirNombreEnPantalla(nombre){
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnPantalla(nombreDario)
imprimirNombreEnPantalla(nombreBrandon)
