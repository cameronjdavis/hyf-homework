function getFullName(firstName, surname, useFormalName = false) {
    let fullName = ((firstName ?? "") + " " + (surname ?? "")).trim();
    return ((useFormalName ? "Lord " : "") + fullName).trim();
}
let fullName1 = getFullName("Benjamin", "Hughes");
let fullName2 = getFullName("Cameron", "Davis");
let fullName3 = getFullName("", "Davis");
let fullName4 = getFullName(undefined, "Davis");
let fullName5 = getFullName("Cameron", undefined);
let fullName6 = getFullName(undefined, undefined);
let fullName7 = getFullName("Cameron", "Davis", true);
let fullName8 = getFullName(undefined, undefined, true);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
console.log(fullName6);
console.log(fullName7);
console.log(fullName8);
