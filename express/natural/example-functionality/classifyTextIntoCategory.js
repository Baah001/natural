let natural = require('natural');

let classifier = new natural.BayesClassifier();

/** The BayesClassifier uses training data to classify content of a string (test data).
 * You should generally have 60 - 80 percent of your data in training data to increase the precision of its predictions **/

const trainingData = [
    {text: "RE: South-African drugs now on sale", label: 'spam'},
    {text: "Earn money on Instagram, start now!!!", label: 'spam'},
    {text: "Congratulations! You happen to be the 120039945 client", label: 'spam'},
    {text: "Earn easy cash", label: 'spam'},
    {text: "Your business trip is confirmed for Monday the 4th", label: 'notspam'},
    {text: "The new project for Instagram is confirmed - next steps", label: 'notspam'},
    {text: "Birthday next weekend", label: 'notspam'},
    {text: "Drinks on Monday?", label: 'notspam'},
];

const testData = [
    {text: "Drugs for cheap", label: 'spam'},
    {text: "Instagram sprint start's on monday - Be Ready", label: 'notspam'},
    {text: "Hang out with someone near you", label: 'spam'},
    {text: "Meet me at home", label: 'notspam'},
];



trainingData.forEach((item) => {
    /** adding the training data to the classifier which will be used as basis to classify testData **/
    classifier.addDocument(item.text, item.label);
});


/** after adding training data you can start training the classifier **/

classifier.train();

testData.forEach((item) => {
    let labelGuess = classifier.classify(item.text);
    console.log('\n');
    console.log(item.text);
    console.log('Label: ', labelGuess);
    console.log(classifier.getClassifications(item.text));

    /** sometimes the results returned by the getClassifications method can be equal to each other :
     * [{ label: 'notspam', value: 0.5555555555555556 },
     * { label: 'spam', value: 0.5555555555555556 }]
     *
     * In this case, there is not enough traning data for the classifier to make an informed decision
     */
});
