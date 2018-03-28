var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/google', function(req, res, next){
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/google', function(req, res){
    res.render('main-view');
});

app.get('/auth/google', function(req, res){
    res.render('loggedin-view');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});