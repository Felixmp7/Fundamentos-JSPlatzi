/*function Persona(nombre, apellido){
	this.name = nombre
	this.lastName = apellido
//	Atributo de   |  se iguala a los parametros que recibe.
//	this (felix,  |
//  en este caso) |
//  llamado       |
//  "name"      |
}


Persona.prototype.saludar = function () {	//		Acá estoy creando un metodo saludar dentro del prototipo
	console.log(`Hola, me llamo ${this.name} ${this.lastName}`) 
} 


let Felix = new Persona('Felix', 'Pacheco')
let Gabriel = new Persona('Gabriel', 'Pacheco')
let Jose = new Persona('José', 'Tapiquen')*/



// Tarea de Sacha

function Persona(nombre, apellido, altura){
	this.name = nombre
	this.lastName = apellido
	this.height = altura
}


Persona.prototype.decirSiEsAlto = function () {

	this.height >= 1.8 ? console.log(`Me llamo ${this.name} ${this.lastName} y soy alto`)
		: console.log(`Me llamo ${this.name} ${this.lastName} y soy bajito`)
	/*if (this.height >= 1.8) {
		console.log(`Me llamo ${this.name} ${this.lastName} y soy alto`)
	} else {
		console.log(`Me llamo ${this.name} ${this.lastName} y soy bajito`)
	}*/
} 

let Felix = new Persona('Felix', 'Pacheco', 1.6)
let Gabriel = new Persona('Gabriel', 'Pacheco', 1.8)
let Jose = new Persona('José', 'Tapiquen', 1.82)
