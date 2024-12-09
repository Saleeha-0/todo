const {response} = require("express");
const { models } = require("./index");
const { where } = require("sequelize");
const { Fn } = require("sequelize/lib/utils");


module.exports = {
    createUser : async (body) =>{
        try{
            const user = await models.users.create({...body}); //spread use kiya wa hai humny 
            return{
                response : user,
            }
        }catch(error){
            return{
                error:error.errors[0].message,
            }
        }
    },
    getAllUser : async() => {
        try{
            const user = await models.users.findAll({
                // attributes : ["name", "username"], //esy humien bas yehi waly show hun ghy 
                // attributes : {
                //     exclude : ["password"]
                // }, //ue hide krta hai ya remove krta in attributes ko 

                paranoid:false //ye sary user show krwata hai  cahy deleted hun ya dosry 
            }); //ye by default true hota hai 
            return{
                response : user,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
    updateUser : async({userName,...body}) => {
        try{
            const user = await models.users.update(
            {
                ...body, //kisme change krna hai 
            },{
                where :{
                    userName : userName, //as a reference
                }
            }
        );
            return{
                response : user,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
    deleteUser : async({userName}) => {
        try{
            const user = await models.users.destroy({
                where :{
                    userName : userName, //as a reference
                }
            }
        );
            return{
                response : user,
            };
        }catch(error){
            return{
                error:error.errors[0].message,
            };
        }
    },
    getUser : async({email, username}) => {
        try{
            const user = await models.users.findOne({
             attributes : ["name", "username"], 
             where : {
                ...(email != "false" ? {email:email} : {username : username}), //ternory operator in where condition
                //...(userId ? {userId:userId} : true), 
                //...(username ? {username:username} : true), 
             }
             //esy humien bas yehi waly show hun ghy 
                // attributes : {
                //     exclude : ["password"]
                // }, //ue hide krta hai ya remove krta in attributes ko 
               // paranoid:false //ye sary user show krwata hai  cahy deleted hun ya dosry 
            }); //ye by default true hota hai 
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