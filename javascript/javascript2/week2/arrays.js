const mentors = [
    { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
    { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
    { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
    { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
    { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
    { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9},
    { "name": "Cameron Davis", "subjects": ['Database', 'CSS', 'Fun'], yearOfExperience: 9},
];

// convert reduce to arrow function
// reduce
// sort
// filter
// map
// for
// for of
// forEach






// const filteredMentors = mentors.reduce((filteredMentors, mentor) => mentor.yearOfExperience >= 9 ? filteredMentors.concat([mentor]) : filteredMentors, [])
// console.log(filteredMentors)

// const filteredMentors = mentors.reduce(function(filteredMentors, mentor) {
//     return mentor.yearOfExperience >= 9 ? filteredMentors.concat([mentor]) : filteredMentors
// }, [])
// console.log(filteredMentors)

// const filteredMentors = mentors.reduce(function(filteredMentors, mentor) {
//     if(mentor.yearOfExperience > 6) {
//         filteredMentors.push(mentor)
//     }
//     return filteredMentors
// }, [])
// console.log(filteredMentors)

// const totalYearsExperience = mentors.reduce(function(totalYearsExperience, mentor) {
//     return totalYearsExperience += mentor.yearOfExperience
// }, 0)
// console.log(totalYearsExperience)

// let totalYearsExperience = 0
// for(mentor of mentors) {
//     totalYearsExperience += mentor.yearOfExperience
// }
// console.log(totalYearsExperience)

// const sortedMentors = mentors.sort(function(mentor1, mentor2) {
//     return mentor1.yearOfExperience < mentor2.yearOfExperience ? 1 : -1
// })
// console.log(sortedMentors)

// const experiencedMentors = mentors.filter(function(mentor) {
//     return mentor.yearOfExperience > 6
// })
// console.log(experiencedMentors)

// const introductions = mentors.map(function(mentor) {
//     return "Mentor's name is " + mentor.name
// })
// console.log(introductions)

// mentors.forEach(function(mentor) {
//     console.log(mentor.name)
// })

// for(mentor of mentors) {
//     console.log(mentor.name)
// }

// for(let i=0; i<mentors.length; i++) {
//     console.log(mentors[i].name)
// }

// convert reduce to arrow function
// reduce
// sort
// filter
// map
// for
// for of
// forEach