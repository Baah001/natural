let natural = require('natural');

let string1 = 'close';
let string2 = 'closer';
let string3 = 'random';


/** JaroWinklerDistance measures how many characters two strings have in common, it also weighs characters at te beginning of a word more heavily than at the end.
 * This method is suited for short words, names and removing duplicates within a particular list **/

console.log(natural.JaroWinklerDistance(string1, string2));
console.log(natural.JaroWinklerDistance(string1, string3));

/** The minimum number of edits needed to turn any given string into another. Basically, how many edits will make string a equal to string b **/
console.log(natural.LevenshteinDistance(string1, string2));
console.log(natural.LevenshteinDistance(string1, string3));


