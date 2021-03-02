const o = {
    1: 456,
    prop1: 123,
    prop2: "abc",
}

const s = JSON.stringify(o, [1, 'prop1'])
// console.log(s)
const j = JSON.parse(s)
// console.log(j)

// const event = new Date('August 19, 1975 23:15:30 UTC');
// const jsonDate = event.toJSON();
// console.log(jsonDate)

const s1 = '{"abc": 123}'
const j1 = JSON.parse(s1)
// console.log(j1)

// https://jsonformatter.curiousconcept.com/#

// \ is an escape character in JS
// \" is an escaped " in JSON
// https://salesforce.stackexchange.com/a/292206
const q = `{"name":"cameron","quote":"Cameron said \\"I ate a pizza\\"."}`
const q1 = JSON.parse(q)
// console.log(q1)

// const yesOrNo = document.getElementById('yes-or-no')
// fetch('https://yesno.wtf/api/')
//     .then(response => response.json())
//     .then(json => yesOrNo.innerHTML = json.answer)

const cardsDiv = document.getElementById('cards')
fetch('https://deckofcardsapi.com/api/deck/new/?deck_count=1')
    .then(response => response.json())
    .then(json => drawCard(json.deck_id))

function drawCard(deckId) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=500`)
        .then(response => response.json())
        .then(json => json.cards)
        .then(cards => cards.forEach(card => {
            let img = document.createElement('img')
            img.src = card.image
            cardsDiv.appendChild(img)
        }))
}
