const  mongoose = require( 'mongoose');
const watchSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('Watch',watchSchema)