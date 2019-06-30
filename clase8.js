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

function cumpleanos(persona){
  //Retornamos un objeto nuevo con la edad modicada
  //Sin modificar el objeto global
  return{
    ...persona,
    edad:persona.edad+1
  }
  //Modifica la variable global incrementando 1
  //persona.edad += 1
}
