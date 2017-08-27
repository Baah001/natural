let natural = require('natural');
let tfidf = new natural.TfIdf();
let trainingData = require('./trainingData/tfidf.trainingData');

/** Despite the fact that tfidf sounds silly, it is actually an abbreviation for `term frequency–inverse document frequency`,
 *  a metric to help us find important words in text data. Natural does this by multiplying
 the term frequency (which is the string you provide) by the inverse document frequency

 Term frequency: how often a particular words is used within one item of text
 Inverse Document Frequency: Math.log(10/(1 + number of documents that contained the search query));

 try running this =>

 let termFrequency = 2;
 let inverseDocumentFrequency = Math.log(10/(1 + 3));
 let combined = termFrequency * inverseDocumentFrequency;
 console.log(combined);
 **/

/** here we can add training data to the tfidf so we can call methods on it **/
trainingData.forEach((item) => {
    tfidf.addDocument(item.toLowerCase());
});

/** sending article to the client **/
function getImportantText() {

    this.getArticle = () => {
        return trainingData;
    };

    this.getStaticImportantText = (searchQuery) => {
        const toSendObj = {};

        tfidf.tfidfs(searchQuery.toLowerCase(), (docIndex, measure) => {
            /** measure: number representing the importance of each item of your training data **/
            toSendObj[`document: ${docIndex}`] = measure;
        });

        return toSendObj;
    };

    /** replacing static text with user input from the client **/
    this.getDynamicImportantText = (userText, searchQuery) => {

        let tfidf = new natural.TfIdf();
        userText.join(",").split('\n').forEach((item) => {
            tfidf.addDocument(item.toLowerCase());
        });

        const toSendObj = {};

        tfidf.tfidfs(searchQuery.toLowerCase(), (docIndex, measure) => {
            toSendObj[`document: ${docIndex}`] = measure;
        });

        return toSendObj;
    };
}

module.exports = getImportantText;