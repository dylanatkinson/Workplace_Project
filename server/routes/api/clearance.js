const express = require('express');
const router = express.Router();

const Clearance = require('../../models/Clearance');

router.get('/', (req, res) => {
    Clearance.find()
        .then(clearance => res.json(clearance));
});

module.exports = router;