const express = require('express');
const Router = express.Router();
const {Create} = require('../controllers/vendorcontroller');


Router.post("/create-vendor",Create);


module.exports = Router;
