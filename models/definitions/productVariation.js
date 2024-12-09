const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const products = require("./product");


class productVariation extends Model {}

productVariation.init({
    ProductVariationID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    Variationname: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    price:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    ProductID:{
        type: DataTypes.STRING(60),
        allowNull: false,
        references:{
            model:products,
            key:"ProductID",
        }
    }
},
{
    name: "productVariation",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

productVariation.beforeCreate(async(productVariation) =>{
    productVariation.ProductVariationID = uuid();
})


module.exports = productVariation;
