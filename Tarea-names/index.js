// package.jason
// guarda
// nombre
// version
// dependencias
// licencia
// Y los scripts que se pueden ejecutar

// El package-lock.json guarda la información de las dependencias que se instalaron en el proyecto
// debe ser versionado
// no debe borrarse
// en caso de tener algun conflicto con git se puede resolver corriendo el comando npm install para generar nuevamente

const prompt = require('prompt-sync')()
const names = []

let option = 'Sí'
while (option.toLowerCase() !== 'no') {
    const name = prompt('Por favor ingresa un nombre: ')
    names.push(name)
    option = prompt('Quieres ingresar mas nombres? (Sí/No): ')
}

console.log(`Estos son la cantidad de nombres que ingresaste: ${names.length}`);

const nombresRepetidos = names.filter((name, index) => names.indexOf(name) !== index)
if (nombresRepetidos.length > 0) {
    console.log(`Estos son los nombres repetidos: ${nombresRepetidos}`)
} else {
    console.log('No hay nombres repetidos')
}

const nombreMasLargo = names.reduce((acc, name) => acc.length > name.length ? acc : name)
console.log(`El nombre más largo es: ${nombreMasLargo}`)

const nombreMasCorto = names.reduce((acc, name) => acc.length < name.length ? acc : name)
console.log(`El nombre más corto es: ${nombreMasCorto}`)