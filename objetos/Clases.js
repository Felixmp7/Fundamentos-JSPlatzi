class Persona {
	constructor(nombre, apellido, altura){
		this.name = nombre
		this.lastName = apellido
		this.height = altura
	}
	saludar() { console.log(`Hola, me llamo ${this.name} ${this.lastName}`) }

	decirSiEsAlto() {
		this.height >= 1.8 ? console.log(`Me llamo ${this.name} ${this.lastName} y soy alto`)
		: console.log(`Me llamo ${this.name} ${this.lastName} y soy bajito`)
	}
}

class Desarrollador extends Persona {
	constructor(nombre,apellido,altura){
		super(nombre,apellido,altura)
	}

	saludar() { console.log(`Hola, me llamo ${this.name} ${this.lastName} y soy Desarrollador`) }
}


let Felix = new Desarrollador('Felix', 'Pacheco', 1.6)
let Gabriel = new Persona('Gabriel', 'Pacheco', 1.8)
let Jose = new Persona('José', 'Tapiquen', 1.82)