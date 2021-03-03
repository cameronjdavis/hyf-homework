// fetch('https://yesno.wtf/api')
//     .then(response => response.json())
//     .then(json => console.log(data))

// fetch('https://knajskdskj.jasdk')
//     .then(response => response.json())
//     .then(json => console.log(data))
//     .catch(error => console.error(error))

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 4000)
// })
//     .then(msg => console.log(msg))

// new Promise((resolve, reject) => {
//     setTimeout(() => reject(Error('goodbye')), 4000)
// })
//     .catch(msg => console.error(msg))

// Promise.all([
//     fetch('https://yesno.wtf/api'),
//     fetch('https://yesno.wtf/api'),
//     fetch('https://yesno.wtf/api'),
// ])
//     .then(responses => Promise.all(responses.map(response => response.json())))
//     .then(jsons => jsons.forEach(json => console.log(json)))

// getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// Sometimes it should resolve and sometimes it should reject. 
// Look into Math.random
function getLoggedInUsers() {
    return new Promise((resolve, reject) => {
        Math.random() < 0.5 ? resolve(['benna', 'magdy', 'carolina']) : reject('Cannot see who is logged in')
    })
}
getLoggedInUsers()
    .then(users => {
        console.log(users)
    }).catch(error => {
        console.log(error)
    });
