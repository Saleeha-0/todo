const { DataTypes, Model } = require("sequelize");
const { v4: uuid } = require("uuid");
const connection = require("../../dbConnection");

class admin extends Model {}

admin.init({
    adminID: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING(40),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(20),
        defaultValue: "admin",
        allowNull: false,
    }
},
{
    modelName: "admin",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

admin.beforeCreate(async(admin) => {
    admin.adminID = uuid();
});

module.exports = admin;
