var nombre = 'Felix'

/*function imprimirNombreEnMayusculas() {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas()
console.log(window.nombre)
*/

function imprimirNombreEnMayusculas(n) {
  n = n.toUpperCase()
  console.log(n)
}

imprimirNombreEnMayusculas(nombre)
console.log(window.nombre)

/*

Toda variable que no esté definida dentro de una función va a estar definida dentro del alcance global y podremos
acceder a ella mediante el objeto global, que en el caso del navegador es window.

ALCANCE DE LAS FUNCIONES
Hace referencia a cuáles variables puede acceder una funcion y el valor que tienen al momento de 
invocar la funcion.

Variable global: Variable que no esta definida dentro de una funcion sino por fuera de ella.
Al hacer referencia directa a una variable global dentro de una funcion, podermos modificar su valor, 
esto se le denomina sideEfect, y esto lo vamos a querer evitar.

Para acceder a la variable global, hacemos referencia al objeto global, en este caso por estar en el 
browser accedemos con window.nombre

*/