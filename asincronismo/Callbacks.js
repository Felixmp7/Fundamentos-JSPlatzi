/*Para hacer request, lo mas importante es conocer la url a la cual queremos acceder
ésta url la vamos a guardar en una variable*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id' // :id va a variar dependiendo del personaje.

//Para hacer un request con jQuery

// $.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true })

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const options = { crossDomain: true }

/*$.get(lukeUrl, options, function(luke) {  Ésta funcion solo se ejecutará si el request es exitoso, 
	console.log(`Hola, soy ${luke.name}`) el parametro options me devuelve un string que puede ser exitoso
})										  o fallido*/

const onCharacterResponse = function (character){
	console.log(`Hola, soy ${character.name}`)
}

$.get(lukeUrl, options, onCharacterResponse)