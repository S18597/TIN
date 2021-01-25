var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formRouter = require('./routes/form');


var app = express();

app.get('/hello', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('hello world');
})

app.get("/form", (req, res) => res.render("form", { formTitle: "Test form" }));	

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(formRouter);


app.post("/formdata", function(req, res) {
    let body = req.body;
    res.render("formdata", { name: body.name, surname: body.surname, hobby: body.hobby });
});


app.post("/jsondata", function(req, res) {
    res.render("formdata", {data: req.body});
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
