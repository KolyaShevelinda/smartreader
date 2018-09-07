const express = require('express');
const router = express.Router();
const docxParser = require('docx-parser');
const mammoth = require('mammoth');

router.post('/upload', function (req, res) {
    if (!req.files.foo)
        return res.status(400).send('No files were uploaded.');

    // console.log(req.files.foo); // the uploaded file object
    var file = req.files.foo;

    file.mv('./files/' + file.name, function (err) {
        if (err)
            return res.status(500).send(err);

        // res.send('File uploaded!');

        // pdfParser.pdf2json('./files/' + file.name, function (error, pdf) {
        //     if (error) {
        //         console.log(error);
        //         res.status(500).send(error);
        //     } else {
        // console.log(JSON.stringify(pdf.pages[0].texts));
        // getTextFromPages(pdf.pages);
        // docxParser.parseDocx('./files/' + file.name, function (docx) {
        //     if (error != null) {
        //         console.log(error);
        //     } else {
        //         // console.log(JSON.stringify(docx.pages[0].texts));
        //         // getTextFromPages(docx.pages);

        //         res.status(200).send(getTextFromPages(docx.pages));
        //     }
        //     res.status(200).send(docx);

        // });

        const filepath = './files/' + file.name;

        mammoth.convertToHtml({path: filepath})
            .then(function (result) {
                var html = result.value;
                var messages = result.messages;
                
            });
            return res.status(200).send(html);
    });
});


function getTextFromPages(pages) {
    let allText = '';
    pages.forEach(function (page) {
        page.texts.forEach(function (pageText) {
            console.log(JSON.stringify(pageText.text));
            allText += pageText.text;
        })
    });

    return allText;
}


function saveDocument(path, text, html) {
    const query = 'INSERT INTO documents(path, text, html) VALUES($1, $2, $3) RETURNING *';
    const values = [path, text, html];

    // callback
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
            // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
        }
    })
}

module.exports = router;