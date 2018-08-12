const router = require('express').Router();
const accounts = require('../db/accounts');


router.get('/', function (req, res) {
    res.render('users');
});

router.get('/all', function (req, res) {
    accounts.findAll()
        .then(function (users) {
            // console.log("USERS: ", users);
            res.status(200).send(users);
        })
        .catch(function (error) {
            res.status(500).send(error);
        });

});

router.get('/:id', function (req, res) {
    const id = req.params.id;

    accounts.findOneById(id)
        .then(function (user) {
            // console.log("USERS: ", users);
            res.status(200).send(user);
        })
        .catch(function (error) {
            res.status(500).send(error);
        });

});

router.post('/create', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    accounts.createAccount(email, password)
        .then(function (users) {
            // console.log("USERS: ", users);
            res.status(200).send(users);
        })
        .catch(function (error) {
            res.status(500).send(error);
        });

});


module.exports = router;