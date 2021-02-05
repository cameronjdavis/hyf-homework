function countDanishLetters(sentence) {
    let count = 0;
    const danes = ['æ', 'ø', 'å'];
    for (character of sentence) {
        if (danes.includes(character)) {
            count++;
        }
    }
    return count;
}

const danishString = "Jeg har en blå bil";
const result = countDanishLetters(danishString);
console.log(result);

const danishString2 = "Blå grød med røde bær";
const result1 = countDanishLetters(danishString2);
console.log(result1);
