const {response} = require("express");
const { models } = require("./index");



module.exports = {
    createVendor : async (body) =>{
        try{
            const user = await models.vendor.create({...body});
            return{
                response : user,
            }
        }catch(error){
            return{
                error:error.errors[0].message,
            }
        }
    },
}