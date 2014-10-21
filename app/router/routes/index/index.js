var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('layout', { title : 'Home' });
});

module.exports = router;
