const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const attributes = require("./attributes");
const productVariation = require("./productVariation");

//...,..PIVOT TABLE.....

class VarriationHasAttributes extends Model {}

VarriationHasAttributes.init({
    VarriationHasAttributesID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    productVariationId:{
        type : DataTypes.STRING(),
        references : {
            model : productVariation,
            key : "productVariationId"
        }
    },
    attributeId :{
        type : DataTypes.STRING(),
        references : {
            model : attributes,
            key : "attributesId"
        }
    }
},
{
    name: "VarriationHasAttributes",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

VarriationHasAttributes.beforeCreate(async(VarriationHasAttributes) =>{
    VarriationHasAttributes.VarriationHasAttributesID = uuid();
})


module.exports = VarriationHasAttributes;