//Valores primitivos
var x = 4 , y = '4'

//Nos devuelve true (Lleva los 2 valores de comparacion es igual)
//console.log(x==y)

//Mismo valor y mismo tipo de dato?
//console.log(x===y)


//Comparacion entre Objeto
var brandon = {
  nombre: 'Brandon'
}

var personaX = {
  nombre: 'Brandon'
  //Copiar objeto Brandon
  ...brandon
}


//Devuelve false:
//console.log(brandon==personaX)
//console.log(brandon===personaX)

//Devuelve true
personaX= brandon //Solo si apunta al mismo espacio de memoria
console.log(brandon==personaX);
