const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

let id = 0

for(id = 1; id <= 5; id++){

	const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	const options = { crossDomain: true }
	const onCharacterResponse = function (character){
		console.log(`Hola, soy ${character.name}`)
	}

	$.get(characterUrl, options, onCharacterResponse)
}


