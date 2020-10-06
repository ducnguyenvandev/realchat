var express = require('express');
var router = express.Router();

//create io server
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

io.on('connection', function (client) {
    console.log('Client connected...');
});


module.exports = router;
