var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bike = require('./routes/bike');

mongodb://<dbuser>:<dbpassword>@ds045511.mongolab.com:45511/heroku_app34150280

var dbName = 'bikeDB';
var devUrl = 'mongodb://localhost:27017/'
var herokuURL = 'mongodb://minimal:minimal@ds045511.mongolab.com:45511/heroku_app34150280'
var connectionString = devUrl + dbName;

<<<<<<< HEAD
app.get("/api/bikes", function(req, res, next) {
    res.send(bikes);
});

router.get('/mybike', function(req, res) {
    res.json({message: bikes});
});

router.get('/mybike/frame/', function(req, res) {
    res.json({
        "frames" :
        [
        "urban",
        "road",
        "mountain"
        ]
    });
});

router.get('/mybike/frame/:bike_type', function(req, res) {
    res.json({
        "frames" :
        [
        "urban",
        "road",
        "mountain"
        ]
    });
});

router.get('/mybike/parts', function(req, res) {
    res.json({
        "part": "part",
        "part": "part"
    });
});

router.get('/mybike/rides/', function(req, res) {
    res.json({
      "id": "22",
      "rider_id": 1,
      "frame": "urban",
      "ride_name": "wow"
    });
});

router.get('/mybike/tech/', function(req, res) {
    res.json({
     "power_level": "Power Level",
     "find_my_bike": "find_my_bike",
     "bike_tamper": "tamper",
     "bluetooth": "bluetooth"
    });
});
app.use('/api', router);
=======
mongoose.connect(connectionString);
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', bike);

module.exports = app;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));



// app.use('/', routes);
// app.use('/api', router);
>>>>>>> added bike model, routes and crud



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});



/*var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
*/