const accounts = require('../db/accounts');


accounts.findOneByEmail()
    .then(function (user) {

    })
    .catch(function (error) {

    });


accounts.findAll()
    .then(function (accounts) {

    })
    .catch(function (error) {

    });