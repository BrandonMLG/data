var nombre = 'Brandon', apellido = 'Vargas'
//String en mayuscula
var nombreEnMayusculas = nombre.toUpperCase()
//String en minuscula
var apellidoEnMinusculas = apellido.toLowerCase()

//Obtener caracter
var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length
//Interpolar variables
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

//Extaer de caracteres
//(*Posicion inicial*,*Numero de caracteres a Extraer*)
var str = nombre.substr(1, 2)

//Ultima letra de su nombre en mayusculas

var ultimaLetra = nombre.charAt(cantidadDeLetrasDelNombre-1).toUpperCase()
