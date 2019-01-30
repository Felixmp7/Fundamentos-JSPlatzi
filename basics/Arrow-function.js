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

/*const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD*/
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD //Desestructurando


function imprimirSiEsMayorDeEdad(persona){
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	} 
}

function permitirAcceso(persona){
	if (!esMayorDeEdad(persona)) { // si no es mayor de edad (esMayorDeEdad me duvuelve false)
		console.log('ACCESO DENEGADO')
	} else {
		console.log('ACCESO CONCEDIDO')
	}
}