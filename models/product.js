var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    ID: String,
    name: String,
    price: String,
    catagory: String,
    details: String,

})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;