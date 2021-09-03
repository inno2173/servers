var express = require('express');
const Product = require('../models/productModel');
var router = express.Router();


router.get('/', (req, res, next) => {
     Product.find((err, data) => {
        if (err) throw err;
        res.status(200).send(data);
    })
});

router.get('/:id', (req, res,next) => {
    Product.findById(req.params.id, (err, data) => {
        if (!data)
            return res.status(404).send("Product not found with the given ID");
        if (err) throw err;
        res.status(200).send(data);
    });
});
router.put('/:id', function (req, res) {
    Product.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("Product not found with the given ID");
        Product.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err) throw err;
            res.status(200).send("Product updated successfully");
        });
    });
});

router.post('/', (req, res, next) => {
    Product.create(req.body, (err, data) => {
        if (err) throw error;
        res.status(201).send(data);
    });
});

router.delete('/:id', function (req, res) {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.status(200).send("Deleted successfully");
    });
});


module.exports = router;
