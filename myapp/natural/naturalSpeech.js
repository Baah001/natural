let natural = require('natural');
let Tagger =  natural.BrillPOSTagger;

let myString = 'some silly text'.split(' ');

let baseFolder = '../node_modules/natural/lib/natural/brill_pos_tagger';
let rules = `${baseFolder}/data/English/tr_from_posjs.txt`;
let lexicon = `${baseFolder}/data/English/lexicon_from_posjs.json`;
let defaultCategory = 'N';


let tagger = new Tagger(lexicon, rules, 'N', function(err) {
    console.log('do somethong');
    if (err){
        console.log(err)
    } else {
        console.log(tagger.tag(myString));
    }
});



// nouns: [ 'bear', 'squirrel', 'little', 'chased' ],
//     verbs: [ 'bear' ],
//     adjectives: [ 'little', 'angry', 'frightened' ],
//     adverbs: [ 'little' ],
//     rest: [ 'the' ]
// }