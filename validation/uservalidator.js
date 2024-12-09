
const joi = require("joi");
const responsehandler = require("../responsehandler");
// const createUserValidator = joi.object({
//     name: joi.string().min(5).max(30).required(),
//     username: joi.string().alphanum().required(),
//     password: joi.string().min(3).max(16).required(),
// });
const Create = joi.object({
    name : joi.string().required(),
    userName : joi.string().required(),
    password : joi.string().required(),
})
const Update = joi.object({
    name : joi.string().required(),
    username : joi.string().required(),
})
const Deleteuser = joi.object({
    username : joi.string().required(),
})


module.exports = {
    create: async (req, res, next) => {
        try {
            await Create.validateAsync(req.body);
            next();
        }catch (error) {
            return responsehandler(res,{error: error.message});
        }
    },
    update: async (req, res, next) => {
        try {
            await Update.validateAsync(req.body);
            next();
        }catch (error) {
            return responsehandler(res,{error: error.message});
        }
    },
    deleteuser: async (req, res, next) => {
        try {
            await Deleteuser.validateAsync(req.query);
            next();
        }catch (error) {
            return responsehandler(res,{error: error.message});
        }
    }
}