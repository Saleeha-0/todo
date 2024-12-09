const express = require('express');
const Router = express.Router();
const {create, update, deleteuser} = require("../validation/uservalidator");
const {Create,Update, Get,GetOne, Deleteuser, } = require('../controllers/usercontroller');

Router.get("/get-user", Get);
Router.get("/get-oneuser", GetOne);
Router.post("/create-user", create, Create);
Router.patch("/update-user", update, Update);
Router.delete("/delete-user", deleteuser, Deleteuser);

module.exports = Router;
