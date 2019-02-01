/*console.log('A')
setTimeout(() => console.log('B'), 0 )
console.log('C')*/

setTimeout(()=> console.log('Me voy a ejecutar en "2" segundos'),3000)
for (var i = 1; i <= 10000000009; i++) {
}

// Acá veo que el setTimeout() deberia mostrar por consola el mensaje despues de 3 segundos...
// tarda muchisimo mas porque a pesar de que a los 3 segundos, ya ésta funcion está lista para ejecutarse...
// Está en la cola de tareas de javascript, mientras que en la cola de ejecuciones está sólo el for, pero...
// como el for (en este caso) tarda muchisimo en terminarse, el setTimeout no puede pasarse a la cola de ejecuciones
// hasta que ésta no esté vacía. Por eso el mensaje se tarda mas de 3s en ejecutarse y termina ejecutandose casi a 
// los 5 mientras