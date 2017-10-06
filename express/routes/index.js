const express = require('express');
const router = express.Router();
const soundAlike = require('../natural/soundAlike');

const tfidf = require('../natural/tfidf');
const tfidfFn = new tfidf();


/** return tfidf results on static news article **/
router.get('/natural/statictext/:staticSearch', function (req, res, next) {
    const searchQuery = req.params.staticSearch;
    const toSendJson = JSON.stringify(tfidfFn.getStaticImportantText(searchQuery));

    res.status(res.statusCode).send(toSendJson);
});


/** receives user input and returns tfidf results to the client **/
router.post('/natural/dynamictext/:dynamicSearch', function (req, res, next) {

    const userText = req.body.uploadedText;
    const searchQuery = req.params.dynamicSearch;
    const toSendJson = JSON.stringify(tfidfFn.getDynamicImportantText(userText, searchQuery));

    res.status(res.statusCode).send(JSON.stringify(toSendJson));
});


/** sends methaphone and jarowinkler results to the client **/
router.get('/natural/soundalike/:baseword/:word/:jarowinkler', function (req, res, next) {

    const baseword = req.params.baseword;
    const word = req.params.word;
    const jarowinkler = JSON.parse(req.params.jarowinkler);

    if (jarowinkler) {

        let toSend = JSON.stringify(soundAlike.getJaroWinklerResults(baseword, word));
        res.status(res.statusCode).send(toSend);

    } else {

        let toSend = JSON.stringify(soundAlike.getMetphoneResults(baseword, word));
        res.status(res.statusCode).send(toSend);
    }
});


/** returns the static article (training data) to the client **/
router.get('/natural/static/article', function (req, res, next) {

    let toSendJson = JSON.stringify({article: tfidfFn.getArticle()});
    res.status(res.statusCode).send(toSendJson);
});

module.exports = router;
