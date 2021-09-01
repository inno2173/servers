var express = require('express');
const Contact = require('../models/contactModel');
var router = express.Router();


router.post('/', (req, res, next) => {
    Contact.create(req.body, (err, data) => {
        if (err) throw error;
        res.status(201).send(data);
    });
});

router.get('/', (req, res, next) => {
    Contact.find((err, data) => {
        if (err) throw err;
        res.status(200).send(data);
    })
});

module.exports = router;
