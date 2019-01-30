var felix = {
	nombre: 'Felix',
	apellido: 'Pacheco',
	edad: 22,
	ingeniero: false,
	chef: false,
	futbolista: true,
	desarrollador: true,
	dj: false,
}

var gabriel = {
	nombre: 'Gabriel',
	apellido: 'Pacheco',
	edad: 17,
}

function imprimirSiEsMayorDeEdad(persona){
	if (persona.edad >= 18) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	} 
}