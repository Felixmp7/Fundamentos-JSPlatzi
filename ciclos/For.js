let felix =  {
	nombre: 'Felix',
	apellido: 'Pacheco',
	edad: 22,
	peso: 60
}

console.log(`Al inicio del año ${felix.nombre} pesa ${felix.peso} kg`)

const PESO = 0.2

const aumentarDePeso = persona => persona.peso += PESO
const adelgazar = persona => persona.peso -= PESO

for (var i = 1; i <= 365; i++) {
	var random = Math.random()

	if (random < 0.25) {
		//aumenta de peso
		aumentarDePeso(felix)
	} else if (random < 0.5) {
		// adelgazar
		adelgazar(felix)
	}

}



console.log(`Al final del año ${felix.nombre} pesó ${felix.peso.toFixed(2)} kg`)
