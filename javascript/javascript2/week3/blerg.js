function add(first, second) {
    return first + second
}

const successMessage = (subject) => {
    console.log('Completed homework ' + subject)
}

function completedHomework(subject, callback) {
    console.log('You have finish your homework, subject' + subject)
    callback(subject)
}

//completedHomework('math', successMessage)

const button = document.getElementById('clicker')
button.addEventListener('click', completedHomework('math', successMessage))