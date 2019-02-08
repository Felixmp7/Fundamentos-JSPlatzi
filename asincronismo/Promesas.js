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
	.then(function(personaje){
		console.log(`Hola, soy ${personaje.name}`)
	})
	.catch(onError)

/*	ENTENDIENDO LAS PROMESAS

1. Llamo a mi funcion que obtendrá el personaje que le pedí pasandole el parametro 1. (Linea 20)
2. Entro en la funcion obtenerPersonaje recibiendo como parámetro el id = 1 (Linea 5)
3. Sigo la sintaxis para crear una promesa, que recibe 2 parametros. resolve = dar ok, si todo va bien
	y reject = rechazar si ocurre un error. (Linea 6)

4. Hago el request (.get) al servidor para obtener la informacion de SWAPI y el 3er parametro es el que recibirá
	la informacion que estoy pidiendo como parámetro. (Linea 9)

5. En éste punto se asume que la petición ocurrió sin errores, se obtuvieron los datos y entonces ejecutamos
	resolve(datos) pasandole como parametro los datos que va a utilizar. En otras palabras el resolve le dice
	a nuestra funcion obtenerPersonaje(1) : "Ok! tengo los datos del personaje 1, te los mando y haz con ellos
	lo que quieras" (Linea 10)

6. Entonces indicamos a la funcion obtenerPersonaje(1) lo que debe hacer si la promesa ocurrió exitosamente, mediante
	el .then(function(personaje)) pasandole como parametro los datos enviados por el resolve(). (Linea 21)

7. Mismo procedimiento si ocurre un error, cae en el reject() y luego entra en el catch().


*/
