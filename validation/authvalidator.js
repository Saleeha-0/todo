const joi = require("joi");

const createAuthValidator = joi.object({
    name: joi.string().min(5).max(30).required(),
    username: joi.string().alphanum().required(),
    password: joi.string().min(4).max(16).required(),
});

module.exports = {
    createAuthValidator: async(req, res, next) => {
        try {
            await createAuthValidator.validateAsync(req.body);
            next();
        }
        catch (error) {
            return res.send({
                error: error.message,
            })
        }
    }
}