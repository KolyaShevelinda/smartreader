const DocumentModel = require('../models/documents');

const DocumentsCtrl = {};

DocumentsCtrl.getAll = function (req, res) {
    DocumentModel.findAll(function (err, docs) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).render('search', {
            users: users
        });
    })
};