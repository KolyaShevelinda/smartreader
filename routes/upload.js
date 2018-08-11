const express = require('express');
const router = express.Router();




router.post('files/upload', function(req, res) {
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


module.exports = router;