const client = require('./index');

let Accounts = {};

Accounts.findOneByEmail = function (email) {
    const query = 'SELECT * FROM accounts WHERE email=$1';
    const values = [email];

    return new Promise(function (resolve, reject) {
        client.query(query, values, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res.rows[0]);
        });
    })
};

Accounts.findOneById = function (id) {
    const query = 'SELECT * FROM accounts WHERE id=$1';
    const values = [id];

    return new Promise(function (resolve, reject) {
        client.query(query, values, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res.rows[0]);
        });
    })
};


Accounts.findAll = function () {
    const query = 'SELECT * FROM accounts';
    const values = [];

    return new Promise(function (resolve, reject) {
        client.query(query, values, (err, res) => {
            if (err) {
                reject(err);
                console.log(err);
            }
            resolve(res.rows);
        });
    })
};


Accounts.createAccount = function (email, password) {
    const query = 'INSERT INTO accounts(email, password) VALUES($1, $2)  RETURNING *';
    const values = [email, password];

    return new Promise(function (resolve, reject) {
        client.query(query, values, (err, res) => {
            if (err) {
                reject(err);
                console.log(err);
            }
            resolve(res.rows[0]);
        });
    })
};


module.exports = Accounts;