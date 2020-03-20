const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const products = require('./routes/api/products');

const app = express();

app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();

mongoose.connect(`mongodb+srv://dylantest:${process.env.PASSWORD}@mern-shoppping-list-oi5ib.mongodb.net/products?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

app.use('/api/products', products);

app.listen(5000, () => console.log("Server started on port 5000"));