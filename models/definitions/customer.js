const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");

class customer extends Model {}

customer.init({
    customerID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
},
{
    name: "customer",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

customer.beforeCreate(async(customer) =>{
    customer.customerID = uuid();

})

module.exports = customer;



