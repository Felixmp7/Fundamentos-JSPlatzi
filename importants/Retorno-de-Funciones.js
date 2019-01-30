let felix = {
	nombre: 'Felix',
	apellido: 'Pacheco',
	edad: 22,
	ingeniero: false,
	chef: false,
	futbolista: true,
	desarrollador: true,
	dj: false,
}

let gabriel = {
	nombre: 'Gabriel',
	apellido: 'Pacheco',
	edad: 17,
}


const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
	return persona.edad >= MAYORIA_DE_EDAD // Esto me retorna "true o false"
}


function imprimirSiEsMayorDeEdad(persona){
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	} 
}