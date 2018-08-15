const AccountsModel = require('../models/accounts');


const AccountsCtrl = {};

AccountsCtrl.getAll = function (req, res) {
    AccountsModel.findAll(function (err, users) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).render('accounts-all', {
            users: users
        });
    })
};


AccountsCtrl.getOneById = function (req, res) {
    AccountsModel.findOneById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send(err);
        }
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(user);
    })
};


AccountsCtrl.getOneByEmail = function (req, res) {
    AccountsModel.findOneByEmail(req.params.email, function (err, user) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(user);
    })
};


AccountsCtrl.createAccount = function (req, res) {
    AccountsModel.createAccount(req.body.email, req.body.password, function (err, user) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(user);
    })
};


AccountsCtrl.login = function (req, res) {
    AccountsModel.findOneByEmail(req.body.email, function (err, user) {
        if (err) {
            return res.status(500).send(err);
        }
        if (!user) {
            return res.render('login', {message: "Email/Password incorrect!"});
        }
        if (req.body.password === user.password) {
            res.redirect('users/all');
        } else {
            return res.render("login", {message: "Email/Password incorrect!"});
        }
    })
};


module.exports = AccountsCtrl;


