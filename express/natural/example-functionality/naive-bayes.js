let natural = require('natural');
let fs = require('fs');
let classifier = new natural.BayesClassifier();

// trying to make a classiefier that categoriezes interenet comments as either related to scienes and space or politics


fs.readFile('training_data.json', 'utf-8', (err, data ) => {
    if(err){
        console.log(err);
    }else{
        let trainingData = JSON.parse(data);

        train(trainingData);
    }
});

function train(trainingData) {
    console.log('It is training');

        trainingData.forEach((item) => {
            classifier.addDocument(item.text, item.label)
        });

    /** adding start time to see how long it takes to train the Naive Bayes classifier **/

    const startTime = new Date();
    classifier.train();
    const endTime = new Date();

    /** displays how long it took to train the classiefier **/

    const trainingtime = endTime - startTime/ 1000.0;

    console.log('Training time', trainingtime, 'seconds');

    loadTestData()
}

function loadTestData() {
    console.log('Loading test data');

    fs.readFile('test_data.json', 'utf-8', (err, data) => {
        if(err) {

        }else {
            let testData = JSON.parse(data);
            testClassifier(testData);
        }
    })
}

function testClassifier(testData) {
    console.log('Testing classifier');
    let numCorrect = 0;
    testData.forEach((item) => {
        let labelGuess = classifier.classify(item.text);

        if(labelGuess === item.label) {
            numCorrect++
        }

        console.log('Correct %', numCorrect/testData.length)
    })
}