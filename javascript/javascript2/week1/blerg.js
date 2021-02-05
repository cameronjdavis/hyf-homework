const div = document.createElement('div');
div.innerHTML = "This div was created using Javascript";
const body = document.querySelector('body');
body.appendChild(div);
div.style.backgroundColor = 'blue';

const button = document.querySelector('#red-button');
button.innerHTML = 'You got me';
button.addEventListener('click', function onClick(e) {
    console.log('it was clicked');
    body.style.backgroundColor = 'red';
    //console.log(e);
});

document.addEventListener('keydown', function(e) {
    console.log(e);
});
