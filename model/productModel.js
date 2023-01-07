const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        minLength:5,
        maxLength:50,
        required:true,
        enum:["Laptop","television","Mobile"],
    },
    price: {
        type:Number,
        required:true,
    },
    description: {
        type:String,
        maxLength:255,
    },
    Quantity: {
        type:Number,
        required:true
    },
    brand: {
        type:String,
        required:true
    },
    userQuantity: {
        type:Number,
    },
    starRating: {
        type:Number,
    },


});

const product = mongoose.model("product",productSchema);
module.exports = product;