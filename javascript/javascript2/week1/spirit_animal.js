const animalNames = [
    'Floating Chair',
    'Weeping Mutt',
    'Total Boss',
    'High Wind'
];
const realNameInput = document.getElementById('real-name');
const getNameButton = document.getElementById('get-animal-name');
const nameOutput = document.querySelector('#animal-name');
const errorOutput = document.querySelector('#error');
const radios = document.getElementsByName("choice");
for (radio of radios) {
    radio.addEventListener('change', function () {
        const checkedRadio = document.querySelector('input[name="choice"]:checked');
        const checkedValue = checkedRadio.value;
        if (checkedValue == 'click') {
            getNameButton.addEventListener('click', generateName);
            realNameInput.removeEventListener('mouseover', generateName);
        } else {
            getNameButton.removeEventListener('click', generateName);
            realNameInput.addEventListener('mouseover', generateName);
        }
    });
}

function generateName() {
    const realName = realNameInput.value.trim();
    if (realName.length == 0) {
        errorOutput.innerHTML = 'Enter a name';
        return;
    }
    errorOutput.innerHTML = '';
    const randomAnomalName = animalNames[Math.floor(Math.random() * animalNames.length)];
    nameOutput.innerHTML = `${realName} - ${randomAnomalName}`;
}

getNameButton.addEventListener('click', generateName);
realNameInput.removeEventListener('mouseover', generateName);
