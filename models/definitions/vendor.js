const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");


class vendor extends Model {}

vendor.init({
    vendorID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    username : {
        type : DataTypes.STRING(60),
        unique : true,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING(60),
        allowNull : false,
    }
},
{
    name: "vendor",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

vendor.beforeCreate(async(vendor) =>{
    vendor.vendorID = uuid();
    user.password = await hash(user.password, 10);
})

module.exports = vendor;
