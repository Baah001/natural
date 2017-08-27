let natural = require('natural');
let tfidf = new natural.TfIdf();
let trainingData = require('../trainingData/tfidf.trainingData');

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
