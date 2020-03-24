const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');

router.get('/', (req, res) => {
    Product.find()
        .then(products => res.json(products));
});

// router.post('/', (req, res) => {
//     const newProduct = new Product({
//         range: req.body.range,
//         seats: req.body.seats,
//         description: req.body.description,
//         material: req.body.material,
//         colour: req.body.colour,
//         price: req.body.price
//     });
//     newProduct.save()
//         .then(product => res.json(product));
// });


module.exports = router;