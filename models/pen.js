const mongoose = require("mongoose") 
const penSchema = mongoose.Schema({  
    type: {type:String, required:true},
    ink_color: String,  
    cost:  { type: Number, min: 5, max: 400, default: 0 },
}); 
 
module.exports = mongoose.model("Pen", penSchema); 