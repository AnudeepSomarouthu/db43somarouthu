const mongoose = require("mongoose") 
const penSchema = mongoose.Schema({  type: String,  ink_color: String,  cost: Number }) 
 
module.exports = mongoose.model("pen", penSchema) 