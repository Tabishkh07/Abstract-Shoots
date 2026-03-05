const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Image schema
const ImageSchema = new Schema({
    image:{
        type:String, 
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Image', ImageSchema);
