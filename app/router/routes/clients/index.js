var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('clients', { title : 'Home' });
});

module.exports = router;
