const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//Para mostrar 5 personajes a mi manera

let id = 0
for(id = 1; id <= 5; id++){

	const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	const options = { crossDomain: true }
	const onCharacterResponse = function (character){
		console.log(`Hola, soy ${character.name}`)
	}

	$.get(characterUrl, options, onCharacterResponse)
}


//Mostrando personajes a la manera de Sacha


/*const options = { crossDomain: true }
const onCharacterResponse = function (character){
	console.log(`Hola, soy ${character.name}`)
}

function obtenerPersonaje(id){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	$.get(url, options, onCharacterResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)	// En que orden crees que llegarán los datos?
obtenerPersonaje(3)
// Nunca sabremos en que orden van a llegar los datos de ésta manera*/

