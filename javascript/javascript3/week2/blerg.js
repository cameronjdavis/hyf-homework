// fetch('https://yesno.wtf/api')
//     .then(response => response.json())
//     .then(json => console.log(data))

// fetch('https://knajskdskj.jasdk')
//     .then(response => response.json())
//     .then(json => console.log(data))
//     .catch(error => console.error(error))

const p = new Promise((resolve, reject) => {
    false ? resolve('resolved') : reject(new Error('rejected'))
})

p.then(result => result + " from Cameron")
    .then(message => console.log(message))
    .catch(err => console.error(err))
    .finally(() => console.log('finally'))
