const responsehandler = require("../responsehandler");
const {createVendor} = require("../models/vendorModel");


module.exports = {
    Create: async(req,res) => {
        try{
            const response = await createVendor(req.body);
            return responsehandler(res, response);
        }catch(error){
            return responsehandler(req,{error:error});  
        }
     },
}