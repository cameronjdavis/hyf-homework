const alertButton = document.getElementById('alert-button')

alertButton.addEventListener('click', clickCallback)

let clickCallback = function() {
    alert('Alert!')
}