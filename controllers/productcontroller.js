const responsehandler = require("../responsehandler");
const { createProduct, getAllproducts } = require("../models/productModel");


module.exports = {
    Create: async(req,res) => {
        try{
            // req.body.vendorId = req.vendor.vendorId;
            const response = await createProduct(req.body);
            return responsehandler(res, response);
        }catch(error){
            return responsehandler(req,{error:error});  
        }
     },
     Get: async(req,res) => {
        try{
            const response = await getAllproducts();
            return responsehandler(res, response);

        }catch(error){
            return responsehandler(req,{error:error});
        }

    },
}