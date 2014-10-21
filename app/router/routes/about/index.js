var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('about', { title : 'Home' });
});

router.get('/luke', function (req, res) {
    res.render('luke', { title : 'Home' });
});

router.get('/martin', function (req, res) {
    res.render('martin', { title : 'Home' });
});

module.exports = router;
