let natural = require('natural');

let metaphone = natural.Metaphone;

let word1 = 'pair';
let word2 = 'pear';

// metaphone.compare(word1, word2);

function getJaroWinklerResults(baseWord, word) {
    /** JaroWinklerDistance measures how many characters two strings have in common, it also ways characters at te beginning of the word more heavily than at the end.
     * This method is suited for short words, names and removing duplicates within a particular list **/

    this.jaroResult = natural.JaroWinklerDistance(baseWord, word).toFixed(3);

    if (this.jaroResult > 0.700) {
        return {
            result: true,
            baseWordResult: natural.JaroWinklerDistance(baseWord, word),
            wordResult: natural.JaroWinklerDistance(baseWord, word)
        }

    } else {
        return {
            result: false,
            baseWordResult: `Dude... '${baseWord}' does not rhyme with : '${word}'`,
            wordResult: natural.JaroWinklerDistance(baseWord, word)
        }
    }
}

function getMetphoneResults(baseWord, word) {

    if (metaphone.compare(baseWord, word)) {

        return {
            result: true,
            baseWordResult: metaphone.process(baseWord),
            wordResult: metaphone.process(word)
        }

    } else {
        return {
            result: false,
            baseWordResult: metaphone.process(baseWord),
            wordResult: metaphone.process(word)
        }
    }
}

module.exports = {
    getMetphoneResults: getMetphoneResults,
    getJaroWinklerResults: getJaroWinklerResults
};

