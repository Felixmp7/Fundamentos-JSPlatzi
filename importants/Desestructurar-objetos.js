var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

/*function imprimirNombreEnMayusculas({ nombre }) { // Desestructurando un objeto como parametro que va a recibir 
  console.log(nombre.toUpperCase())					// la funcion ya que en la funcion solo necesito 
}*/													// el nombre de la persona.

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona	// GUARDAR EN LA VARIABLE nombre EL VALOR QUE TIENE LA PROPIEDAD DE persona.nombre
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
//imprimirNombreEnMayusculas({ apellido: 'Gomez' })

/*Las propiedades en los objetos pueden recibir objetos, ejemplo:

var chat = {
	info: {
		mensaje: 'Algun mensaje',
		fechaMensaje: '20/10/2050',
		deUsuario: 'victor',
		aUsuario: 'SachaLifszyc'
	}
}

console.log(chat.info.mensaje) // Salida -> Algun mensaje*/




// Reto: Funcion que muestre por pantalla nombre y edad.

function nombreYEdad(persona){
	var { nombre, edad } = persona;
	console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

nombreYEdad(sacha);
nombreYEdad(dario);