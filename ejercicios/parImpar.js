const number = parseInt(process.argv[2])

const parImpar = (number) =>{
    if (number % 2 == 0) {
        console.log(`El número ${number} es par`)
    }else
    console.log(`El número ${number} es impar`)
}

parImpar(number)