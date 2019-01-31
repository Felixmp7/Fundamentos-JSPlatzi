function Persona(nombre, apellido, altura){
	this.name = nombre
	this.lastName = apellido
	this.height = altura
}


Persona.prototype.decirSiEsAlto = () => {

	this.height >= 1.8 ? console.log(`Me llamo ${this.name} ${this.lastName} y soy alto`)
		: console.log(`Me llamo ${this.name} ${this.lastName} y soy bajito`)
} 

/*LLO QUE OCURRE ACÁ ES QUE CON LAS ARROW FUNCTIONS, CUANDO HACEMOS REFERENCIA A this (EL OBJETO QUE INTERACTÚA EN EL
MOMENTO) DENTRO DE LAS ARROW FUNCTION, A PESAR DE COLOCAR this, EL SIGUE REFERENCIANDO A window.*/

let Felix = new Persona('Felix', 'Pacheco', 1.6)
let Gabriel = new Persona('Gabriel', 'Pacheco', 1.8)
let Jose = new Persona('José', 'Tapiquen', 1.82)
