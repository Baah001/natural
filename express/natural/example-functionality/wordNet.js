let natural = require('natural');
// installed the wordnet data-base files npm install --save wordnet-db

let wordnet = new natural.WordNet();

let myWord = 'desert';

wordnet.lookup(myWord, (result) =>{

    result.forEach((result) => {
        console.log('\n');

        /** part of speech **/
        console.log('part of speech: ' , result.pos);

        /** return synonyms array **/
        console.log('synonyms: ', result.synonyms);

        /** definitions of a particular word **/
        console.log(result.gloss);
    })
});



