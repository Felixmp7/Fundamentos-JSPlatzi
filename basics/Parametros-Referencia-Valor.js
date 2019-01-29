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

/*function cumpleanos(persona){	// De esta forma la funcion modificaria mi objeto principal
	persona.edad += 1;
}*/

function cumpleanos(persona){	// De esta forma estoy sacando una copia al objeto principal y modificandolo
	return {					// Incluso puedo añadirle propiedades nuevas que no tenga el principal
		...persona,
		edad: persona.edad +1
	}
}