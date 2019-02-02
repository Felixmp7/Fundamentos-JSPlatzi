const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//Para mostrar 5 personajes a mi manera

/*for(let id = 1; id <= 5; id++){
	const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	const options = { crossDomain: true }
	const onCharacterResponse = function (character){
		console.log(`Hola, soy ${character.name} y soy el personaje numero ${id}`)
	}

	$.get(characterUrl, options, onCharacterResponse)
}*/


//Mostrando personajes a la manera de Sacha


const options = { crossDomain: true }

function obtenerPersonaje(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

	$.get(url, options, function (character){
			console.log(`Hola, soy ${character.name}`)
			if (callback) {
				callback()
			}
		})
}

obtenerPersonaje(1, function(){
	obtenerPersonaje(2, function(){
		obtenerPersonaje(3, function(){
			obtenerPersonaje(4, function() {
				obtenerPersonaje(5)
			})
		})
	})
})



