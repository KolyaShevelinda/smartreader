const client = require('../db/index');

let DocumentModel = {};

DocumentModel.findAll = function (cb) {
    const query = 'SELECT * FROM documents';
    const values = [];
    client.query(query, values, (err, res) => {
        cb(err, res.rows);
    });
};

module.exports = DocumentModel;