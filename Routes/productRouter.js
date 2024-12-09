const express = require('express');
const Router = express.Router();
const {Create} = require('../controllers/productcontroller');


Router.post("/create-product",Create);


module.exports = Router;