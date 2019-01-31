function Persona(nombre, apellido){
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
let Jose = new Persona('José', 'Tapiquen')