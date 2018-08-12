const accounts = require('../models/accounts');


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