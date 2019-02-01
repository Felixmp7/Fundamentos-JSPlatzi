class Persona {
	constructor(nombre, apellido, altura){
		this.name = nombre
		this.lastName = apellido
		this.height = altura
	}
	saludar(fn) { 
		console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
		if (fn) {
			fn(this.name,this.lastName)
		}
	}

	decirSiEsAlto() {
		this.height >= 1.8 ? console.log(`Me llamo ${this.name} ${this.lastName} y soy alto`)
		: console.log(`Me llamo ${this.name} ${this.lastName} y soy bajito`)
	}
}

class Desarrollador extends Persona {
	constructor(nombre,apellido,altura){
		super(nombre,apellido,altura)
	}

	saludar(fn) { 
		/*console.log(`Hola, me llamo ${this.name} ${this.lastName} y soy Desarrollador`)
		if (fn) {				FORMA ANTIGUA
			fn(this.name,this.lastName, true)
		}*/

		var { name, lastName } = this
		console.log(`Hola, me llamo ${name} ${lastName} y soy Desarrollador`) // FORMA MAS EFICIENTE
		if (fn) {
			fn(name,lastName, true)
		}
	}
}

function responderSaludo(nombre,apellido,esDev){
	console.log(`Buen dia ${nombre} ${apellido}`)
	if (esDev) {
		console.log(`Ah coño, tu eres desarrollador!`)
	}
}


let Felix = new Desarrollador('Felix', 'Pacheco', 1.6)
let Gabriel = new Persona('Gabriel', 'Pacheco', 1.8)
let Jose = new Persona('José', 'Tapiquen', 1.82)

Felix.saludar(responderSaludo)
Gabriel.saludar()
Jose.saludar(responderSaludo)