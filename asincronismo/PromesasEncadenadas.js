const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id){
	return new Promise((resolve,reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

		$.get(url,options, function(datos){
			resolve(datos)
		})
		.fail(()=> reject(id))
	})
}

function onError(id){
	console.log(`Ocurrió un error inesperado al obtener al personaje ${id}`)
}

obtenerPersonaje(1)
	.then(personaje1 => {
		console.log(`Hola, soy ${personaje1.name}`)
		return obtenerPersonaje(2)
	})
	.then(personaje2 => {
		console.log(`Hola, soy ${personaje2.name}`)
		return obtenerPersonaje(3)
	})
	.then(personaje3 => {
		console.log(`Hola, soy ${personaje3.name}`)
		return obtenerPersonaje(4)
	})
	.then(personaje4 => {
		console.log(`Hola, soy ${personaje4.name}`)
		return obtenerPersonaje(5)
	})
	.then(personaje5 => {
		console.log(`Hola, soy ${personaje5.name}`)
	})
	.catch(onError)

	console.log(`Hola, en que orden creías que iba a ejecutarme en consola?`)
