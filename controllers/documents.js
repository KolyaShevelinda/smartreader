const DocumentModel = require('../models/documents');

const DocumentsCtrl = {};

DocumentsCtrl.getAll = function (req, res) {

    const search = req.query.search;

    console.log("SEARCH: ", search);

    DocumentModel.findAll(function (err, docs) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).render('documents', {
            docs: docs
        });
    })
};

module.exports = DocumentsCtrl;