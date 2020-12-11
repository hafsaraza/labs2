var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    ID: String,
    duration: String,
    fee: String
})
const Product = mongoose.model("Course", productSchema);
module.exports = Product;