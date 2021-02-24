const counterButtons = Array.from(document.getElementsByClassName('counter_button'))
let count = 0
counterButtons.forEach(x => x.addEventListener('click', () => console.log(count++)))

const delayButton = document.getElementById('delay_button')
delayButton.addEventListener('click', () => setTimeout(() => console.log("This text was delayed by 3 seconds"), 3000))

window.addEventListener("load", () => console.log("DOM fully loaded and parsed"))

let readingsCount = 0
let sumX = 0
let sumY = 0
window.addEventListener('mousemove', (e) => {
    sumX += e.clientX
    sumY += e.clientY
    readingsCount++
})
setInterval(() => {
    const averageX = sumX / readingsCount
    const averageY = sumY / readingsCount
}, 5000)
