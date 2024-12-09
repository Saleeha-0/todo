const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const vendor = require("./vendor");


class product extends Model {}

product.init({
    ProductID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    Productname: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    vendorId:{
        type: DataTypes.STRING(60),
        allowNull: false,
        references:{
            model:vendor,
            key:"vendorId",
        }
    }
},
{
    name: "product",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

product.beforeCreate(async(product) =>{
    product.ProductID = uuid();
})


module.exports = product;
