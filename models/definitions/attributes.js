const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");


class attributes extends Model {}

attributes.init({
    attributesID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    name: {
        type: DataTypes.STRING(60),
    },
    value: {
        type: DataTypes.STRING(60),
    },
},
{
    name: "attributes",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

attributes.beforeCreate(async(attributes) =>{
    attributes.attributesID = uuid();
})


module.exports = attributes;