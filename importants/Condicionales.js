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

function imprimirProfesiones(persona){
	console.log(`${persona.nombre} es: `)

	if (persona.ingeniero) {
		console.log('Ingeniero')
	}
	if (persona.chef) {
		console.log('Chef')
	}
	if (persona.futbolista) {
		console.log('Futbolista')
	}
	if (persona.desarrollador) {
		console.log('Desarrollador')
	}
	if (persona.dj) {
		console.log('DJ')
	} 
}

imprimirProfesiones(felix)