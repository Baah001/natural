const natural = require('natural');
let myString = "I stepped on a Corn Flake, now I'm a Cereal Killer";

let tokenizeSentences = function (myString) {

    /** A ``RegexpTokenizer`` splits a string into substrings using a regular expression **/
    let tokenizer = new natural.RegexpTokenizer({pattern: /[!?.]/});
    console.log(tokenizer.tokenize(myString));
};

tokenizeSentences(myString);
