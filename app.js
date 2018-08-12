const fileUpload = require('express-fileupload');
const express = require('express');
const app = express();
const index = require('./routes/index');
const upload = require('./routes/upload');
const users = require('./routes/users');
const bodyParser = require('body-parser');

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.use('/', index);
app.use('/files', upload);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// view engine
app.set('view engine', 'pug');

// start server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

