const client = require('./index');

var Accounts = {};

Accounts.findOneByEmail = function (email) {

    client.connect();

    const query = 'SELECT * FROM accounts WHERE email=$1';
    const values = [email];

    return new Promise(function(resolve, reject) {
        client.query(query, values, (err, res) => {
            if(err) {
                reject(err);
            }
            // console.log(err ? err.stack : res.rows[0]);
            client.end();
            resolve(res.rows[0]);
        });
    })
};


Accounts.findAll = function () {

    client.connect();

    const query = 'SELECT * FROM accounts';
    const values = [];

    return new Promise(function(resolve, reject) {
        client.query(query, values, (err, res) => {
            if(err) {
                reject(err);
            }
            console.log(err ? err.stack : res.rows[0]);
            client.end();
            resolve(res.rows);
        });
    })
};


Accounts.createAccount = function (email, password) {

    client.connect();

    const query = 'INSERT INTO accounts';
    const values = [email, password];

    client.query(query, values, (err, res) => {
        console.log(err ? err.stack : res.rows[0]);
        client.end()
    });
};


module.exports = Accounts;