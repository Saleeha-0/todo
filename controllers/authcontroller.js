// const { response } = require("express");
// const { hash } = require("bcryptjs");

// module.exports = {

//     login: async(req, res) => {
//         try {
//             req.body.password = await hash(req.body.password, 10);
//             return res.send({
//                 status: "done",
//                 code: "200",
//                 response: req.body
//             })
//         } catch (error) {
//             return res.send({
//                 status: "error",
//                 code: "404",
//                 error: "error"
//             })
//         }
//     },
//     logout: (req, res) => {
//         console.log(req.body)
//         return res.send("logout response");
//     },
// }

module.exports ={
    login : (req,res) =>{
        return res.send( "login request");
    },

    logout : (req, res) =>{
        return res.send("logout request")
    }
};