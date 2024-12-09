const Router =  require("express").Router();  
const{login,logout}=require("../controllers/authcontroller")

const {createAuthValidator} = require("../validation/authvalidator");

Router.get("/login",createAuthValidator,login);
Router.post("/logout",logout);


module.exports = Router;
