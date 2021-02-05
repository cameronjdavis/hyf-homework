function findShortestWord(words) {
    let shortest = null;
    let count = null;
    for (word of words) {
        if (!shortest || word.length < count) {
            shortest = word;
            count = word.length;
        }
    }

    return shortest;
}

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const shortest = findShortestWord(danishWords);
console.log(shortest);
