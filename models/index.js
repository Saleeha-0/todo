const connection = require("../dbConnection");


const customer = require("./definitions/customer");
const product = require("./definitions/product");
const users = require("./definitions/user");
const vendor = require("./definitions/vendor");
const admin = require("./definitions/admin");
const attributes = require("./definitions/attributes");
const productVariation = require("./definitions/productVariation");
const VarriationHasAttributes = require("./definitions/VarriationHasAttributes");



const models = {users, customer, vendor,product, productVariation, VarriationHasAttributes,attributes,admin};


vendor.hasMany(product,{foreignKey:"vendorID"});
product.belongsTo(vendor,{foreignKey:"vendorID"});

product.hasMany(productVariation, {foreignKey : "productId", as : "productVarriation"});
productVariation.belongsTo(product, {foreignKey : "productId"});

productVariation.hasMany(VarriationHasAttributes, {foreignKey : "productVarriationId", as : "variationHasAttributes"});
VarriationHasAttributes.hasMany(productVariation, {foreignKey : "productVariation", as : "variationHasAttributes"});

attributes.hasMany(VarriationHasAttributes,{foreignKey : "attributesId", as :"attributes"});
VarriationHasAttributes.belongsTo(attributes,{foreignKey : "attributesId"});



const db = {};

db.connection = connection;
connection.models = models;

module.exports = {db, models};
