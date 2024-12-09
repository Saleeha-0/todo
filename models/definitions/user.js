const {v4 : uuid} = require("uuid");
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");


class users extends Model {}

users.init({
    userID: {
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
    }
},
{
    name: "users",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
});

users.beforeCreate(async(user) =>{
    user.userID = uuid();
    user.password = await hash(user.password, 10);
})
users.afterCreate((user) => {
    delete user.dataValues.password;
})

module.exports = users;
