let natural = require('natural');
let tfidf = new natural.TfIdf();
let trainingData = require('../trainingData/tfidf.trainingData');

/**Term frequency: how often a particular words is used within one item of text
Inverse Document Frequency: Math.log(10/(1 + number of documents that contained the search query));

try running this =>

let termFrequency = 2;
let inverseDocumentFrequency = Math.log(10/(1 + 3));
let combined = termFrequency * inverseDocumentFrequency;
console.log(combined);

/** here we can add training data to the tfidf so we can call methods on it **/
trainingData.forEach((item) => {
    tfidf.addDocument(item.toLowerCase());

});

/** itemIndex const is the index of the item, within the sentences array you provided as training data.
 * So in this case, we will perform listTerms method on trainingData[4] **/
const itemIndex = 4;

/** listTerms returns the most important words withing a item of text **/
tfidf.listTerms(itemIndex).forEach((item) => {
    console.log(item.term, ":", item.tfidf);
});
