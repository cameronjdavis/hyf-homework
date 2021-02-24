//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
function output(ms) {
    setTimeout(() => console.log(`Called after ${ms} ms`), ms)
}
output(2500)

// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should
// log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function outputAfterDelay(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay)
}
outputAfterDelay(3000, "Hello after the delay")

// Create a button in html. When clicking this button, use the function you created in the previous task
// to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const delayButton = document.getElementById("delay_button")
delayButton.addEventListener('click', () => outputAfterDelay(5000, "Called after 5 seconds"))

// Create two functions and assign them to two different variables. One function logs out Earth, the other function
// logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the
// third function should do is call the provided parameter function. Try call the third function once with the Earth
// function and once with the Saturn function.
const earth = () => console.log('Earth')
const saturn = () => console.log('Saturn')
function planetLog(planetLogFunction) {
    planetLogFunction()
}
planetLog(earth)
planetLog(saturn)

// Create a button with the text called "Log location". When this button is clicked the location
// (latitude, longitude) of the user should be logged out using this browser api
const latLonButton = document.getElementById("lat_lon_button")
const navigationSuccess = (position) => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 8
    });
    console.log(position.coords.latitude, position.coords.longitude)
}
const navigationError = () => console.log("Cannot get current position")
latLonButton.addEventListener('click', () => navigator.geolocation.getCurrentPosition(navigationSuccess, navigationError))

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"
let lastClickTime = 0
document.addEventListener('dblclick',  () => {
    // const now = Date.now()
    // const diff = now - lastClickTime
    // lastClickTime = now
    // if(diff < 500) {
        console.log('double click!')
    // }
})
