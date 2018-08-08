const fileUpload = require('express-fileupload');
var express = require('express');
var app = express();

app.use(fileUpload());

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
  });

app.post('/upload', function(req, res) {
    if (!req.files.foo)
    return res.status(400).send('No files were uploaded.');

    // console.log(req.files.foo); // the uploaded file object
    var file = req.files.foo;

    file.mv('./files/' + file.name, function(err) {
        if (err)
          return res.status(500).send(err);
     
        res.send('File uploaded!');
      });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

