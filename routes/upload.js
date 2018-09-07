const express = require('express');
const router = express.Router();
const mammoth = require('mammoth');
const client = require('../db/index');

router.post('/upload', function (req, res) {
    if (!req.files.foo)
        return res.status(400).send('No files were uploaded.');

    // console.log(req.files.foo); // the uploaded file object
    const file = req.files.foo;

    file.mv('./files/' + file.name, function (err) {
        if (err)
            return res.status(500).send(err);

        const filePath = './files/' + file.name;

        console.log('PATH: ', filePath);

        let html = '';
        let text = '';

        mammoth.convertToHtml({path: filePath})
            .then(function (result) {
                html = result.value;
                const messages = result.messages;
                return mammoth.extractRawText({path: filePath});
            })
            .then(function (result) {
                text = result.value;
                const messages = result.messages;
                saveDocument(filePath, text, html, function () {
                    return res.send('OK');
                });

            })
            .catch(function (error) {
                return res.status(500).send(error);
            })

    });
});


function saveDocument(path, text, html, cb) {
    const query = 'INSERT INTO documents(path, text, html) VALUES($1, $2, $3) RETURNING *';
    const values = [path, text, html];

    // callback
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err);
            console.log(err.stack);
        } else {
            console.log(res.rows[0]);
            cb();
            // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
        }
    })
}

module.exports = router;