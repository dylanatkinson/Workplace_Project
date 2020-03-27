const express = require('express');
const router = express.Router();

const Stores = require('../../models/Stores');

router.get('/', (req, res) => {
    Stores.find()
        .then(stores => res.json(stores));
});

module.exports = router;