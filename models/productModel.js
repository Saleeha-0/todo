const {response} = require("express");
const { models } = require("./index");



module.exports = {
    createProduct : async (body) =>{
        try{
            const user = await models.product.create({...body});
            return{
                response : user,
            }
        }catch(error){
            return{
                error:error.errors[0].message,
            }
        }
    },
    getAllproducts : async() => {
        try{
            const product = await models.product.findAll({
                include :[
                    {
                        model : models.vendor
                    }
                ]
            });
            return{
                response : user,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
}