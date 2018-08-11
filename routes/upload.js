const express = require('express');
const router = express.Router();
const pdfParser = require('pdf-parser');



router.post('/upload', function(req, res) {
    if (!req.files.foo)
        return res.status(400).send('No files were uploaded.');

    // console.log(req.files.foo); // the uploaded file object
    var file = req.files.foo;

    file.mv('./files/' + file.name, function(err) {
        if (err)
            return res.status(500).send(err);

        // res.send('File uploaded!');

        pdfParser.pdf2json('./files/' + file.name, function (error, pdf) {
            if(error != null){
                console.log(error);
            }else{
                // console.log(JSON.stringify(pdf.pages[0].texts));
                // getTextFromPages(pdf.pages);
                res.status(200).send(getTextFromPages(pdf.pages));
            }
        });

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


module.exports = router;