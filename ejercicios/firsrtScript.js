
console.log(process.argv)
const reverse = process.argv[2]
console.log(`La palabra normal es ${reverse}`)
console.log(`La palabra al revez es ${reverse.split('').reverse().join('')}`)

// let i = 0
// setInterval(function() {
//     console.log(i)
//     i++

//     // if (i === 5){
//     //     console.log('force exit')
//     //     const a = 3 + z
//     // }
// }, 1000)

// console.log('I am at the end of the file')

// let name = process.env.NOMBRE || 'Sin nombre'
// let web = process.env.WEB || 'No tengo web'
// console.log('Hola ' + name)
// console.log('Mi web es ' + web)

