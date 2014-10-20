// ====================================================
// EXPRESS
// ====================================================
var express    = require('express');
var app        = express();
var router     = express.Router();

// ====================================================
// APP CONFIG
// ====================================================
var conf       = require('./app/config/conf.js');
var bodyParser = require('body-parser');

app.set('port', conf.port);
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + 'app/assets'));

// @todo - install seperate logging
//app.use(express.logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ====================================================
// ROUTING
// ====================================================
var router = require('./app/router')(app);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;


// ====================================================
// SERVER
// ====================================================
app.listen(app.get('port'), function(){
      console.log('Listening on ' + app.get('port'));
});
