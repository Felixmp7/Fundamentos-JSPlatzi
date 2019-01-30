let felix =  {
	nombre: 'Felix',
	apellido: 'Pacheco',
	edad: 22,
	peso: 60
}

console.log(`Al inicio del año ${felix.nombre} pesa ${felix.peso} kg`)

const PESO = 0.3

const aumentarDePeso = persona => persona.peso += PESO
const adelgazar = persona => persona.peso -= PESO

// Ejemplo del nutricionista que pide que bajes 3 kilos pero no sabemos cuantos dias tomará.


const comeMucho = () => Math.random() < .3
const entrena = () => Math.random() < .6
const META = felix.peso - 3
var dias = 0

while (felix.peso > META) {
	if (comeMucho()) {
		//aumenta de peso
		aumentarDePeso(felix)
	} else if (entrena()) {
		// adelgazar
		adelgazar(felix)
	}
	dias++
}

console.log(`A ${felix.nombre} le tomó ${dias} dias bajar los 3 kg`)

console.log(`Al final del año ${felix.nombre} pesó ${felix.peso.toFixed(2)} kg`)

/*

while(condición) {
    Este código se va a ejecutar siempre a menos que la condicion no se cumpla
}

*/
