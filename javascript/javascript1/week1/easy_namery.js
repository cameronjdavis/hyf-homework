let firstWords = ["Easy", "Awesome", "Lodge"];
let secondWords = ["Business", "Tired", "Corporate"];
const randomNumber = Math.floor(Math.random() * 3);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup: " + startupName + " contains " + startupName.length + " characters");
