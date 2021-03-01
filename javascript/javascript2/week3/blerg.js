// homework questions
// show/hide elements instead of create/destroy
// image showing function anatomy
// add, multiply callbacks, callbacks (sotring functions as variables) means we can store snippets of code for running later (not now) and when triggered
    // setTimeout, code inspiration
// button on click event handler, add, multiply button

let calcFunction = function calculateBill(meal, taxRate = 0.05) {
    const total = meal * (1 + taxRate)
    return total
}

//let myTotal = calculateBill(100)
// console.log(myTotal)


function log() {
    console.log('My log message')
}

// log()
// setTimeout(log, 3000)


function add(x, y) {
    return x + y
}

function calculate(x, y, aaaa) {
    return aaaa(x, y)
    // return add(12, 7)
}

// console.log(add(12, 7))
const addResult = calculate(12, 7, add)
console.log(addResult)












// () => console.log('I will never be seen')

// function subtract(x, y) {
//     return x - y
// }
// function multiply(x, y) {
//     return x * y
// }
// function add(x, y) {
//     return x + y
// }
// function calculate(x, y, calculator) {
//     console.log(calculator(x, y))
// }

// calculate(2, 3, add)
// calculate(2, 3, multiply)
// calculate(2, 3, subtract)







const movies = [
    'The Avengers',
    'The Avengers 2',
    'Superman',
    'The Little Mermaid',
];

// const avengerMovies = movies.filter(movie => movie.toLowerCase().includes('avenger'))
const avengerMovies = movies.reduce((accumulator, movie) => {
    if(movie.toLowerCase().includes('avenger')) {
        accumulator.push(movie)
    }
    return accumulator
}, [])
// console.log(avengerMovies)



// console.log('hi')

// setTimeout(() => console.log('food'), 3000)

// console.log('bye')

// function recursive(){
//     recursive()
// }
// recursive()

// function firstFunction() {
//     secondFunction();
// }
// function secondFunction() {
//     thridFunction();
// }
// function thridFunction() {
//     //console.log(new Error().stack);
//     throw new Error()
// }
// firstFunction();

