const {response} = require("express");
const { models } = require("./index");
const { where } = require("sequelize");
const { Fn } = require("sequelize/lib/utils");
const customer = require("./definitions/customer");


module.exports = {
    createCustomer : async (body) =>{
        try{
            const user = await models.customer.create({...body}); 
            return{
                response : user,
            }
        }catch(error){
            return{
                error:error.errors[0].message,
            }
        }
    },
    // getAllCustomer : async() => {
    //     try{
    //         const customer = await models.customer.findAll({
    //             paranoid:false 
    //         }); 
    //         return{
    //             response : customer,
    //         };
    //     }catch(error){
    //         return{
    //             error:error.errors[0].message,
    //         };
    //     }
    // },
    updateCustomer : async({CustomerName,...body}) => {
        try{
            const customer = await models.customer.update(
            {
                ...body,
            },{
                where :{
                    CustomerName : CustomerName, 
                }
            }
        );
            return{
                response : customer,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
    deleteCustomer : async({CustomerName}) => {
        try{
            const customer = await models.customer.destroy({
                where :{
                    CustomerName : CustomerName, 
                }
            }
        );
            return{
                response : customer,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
    getCustomer : async({CustomerName}) => {
        try{
            const customer = await models.customer.findOne({
             attributes : ["name", "username"], 
             where : {
                ...({CustomerName : CustomerName}), 
               
             }
             
            }); 
            return{
                response : customer,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
}