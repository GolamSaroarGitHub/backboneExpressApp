const express = require('express')
const app = express()
const path = require('path');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser');


// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', indexRouter.index);

app.get('/books', indexRouter.books.all);
app.get('/books/:id', indexRouter.books.one);
app.use(bodyParser());
app.post('/books',indexRouter.books.create);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function (){
    console.log('listening to port 3000 ');
})