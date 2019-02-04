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

async function obtenerDatos(){
	let ids = [1,2,3,4,5,6,7]
	let promesas = ids.map(id => obtenerPersonaje(id))
	try{

		let personajes = await Promise.all(promesas)
		console.log(personajes)

	} catch(id){
		onError(id)
	}
}

obtenerDatos()