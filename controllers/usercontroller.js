const responsehandler = require("../responsehandler");
const {createUser, getAllUser, updateUser, deleteUser} = require("../models/userModel");


module.exports = {
    Create: async(req,res) => {
        try{
            const response = await createUser(req.body);
            return responsehandler(res, response);
        }catch(error){
            return responsehandler(req,{error:error});
           
        }

    },
    Update: async(req,res) => {
        try{
            const response = await updateUser(req.body);
            return responsehandler(res, response);
        }catch(error){
            return responsehandler(req,{error:error});
        }

    },
    Get: async(req,res) => {
        try{
            const response = await getAllUser();
            return responsehandler(res, response);

        }catch(error){
            return responsehandler(req,{error:error});
        }

    },
    GetOne: async(req,res) => {
        try{
            const response = await getone(req.query);
            return responsehandler(res, response);

        }catch(error){
            return responsehandler(req,{error:error});
        }

    },
    Deleteuser: async(req,res) => {
        try{
            const response = await deleteUser(req.query);
            return responsehandler(res, response);
        }catch(error){
            return responsehandler(req,{error:error});
        }

    }
}



// module.exports = {
//     Create: async(req, res) => {
//         try {
//             req.body.password = await hash(req.body.password, 10);
//             return res.send({
//                 status:"ok",
//                 code: 200,
//                 response:req.body,
//             })
//         } catch(error){
//             return res.send({
//                 status:"error",
//                 code:"404",
//                 error:"not found",
//             })
//         }
//     },
//     getAllUsers: (req,res) => {
//         console.log(req.query)
//         return res.send("get All Users");
//     },
// }
