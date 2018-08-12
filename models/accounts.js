const client = require('../db/index');

let AccountsModel = {};

AccountsModel.findOneByEmail = function (email, cb) {
    const query = 'SELECT * FROM accounts WHERE email=$1';
    const values = [email];

    client.query(query, values, (err, res) => {
        cb(err, res.rows[0]);
    });
};

AccountsModel.findOneById = function (id, cb) {
    const query = 'SELECT * FROM accounts WHERE id=$1';
    const values = [id];

    client.query(query, values, (err, res) => {
        cb(err, res.rows[0]);
    });
};


AccountsModel.findAll = function (cb) {
    const query = 'SELECT * FROM accounts';
    const values = [];
    client.query(query, values, (err, res) => {
        cb(err, res.rows);
    });
};


AccountsModel.createAccount = function (email, password, cb) {
    const query = 'INSERT INTO accounts(email, password) VALUES($1, $2)  RETURNING *';
    const values = [email, password];

    client.query(query, values, (err, res) => {
        cb(err, res.rows[0]);
    });
};


module.exports = AccountsModel;