const numerr = parseInt(process.argv[2])

if (isNaN(numerr)) {
    console.error('No es un número')
    process.exit(1)
}
const fizzBuzz = (numerr) => {

for (let i = 1; i <= numerr; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} - FizzBuzz`);
    }
    else if (i % 3 === 0) {
        console.log(`${i} - Fizz`);
    }
    else if (i % 5 === 0) {
        console.log(`${i} - Buzz`);
    }
    else {
        console.log(i);
    }
}}
fizzBuzz(numerr)