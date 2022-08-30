const mongoose = require('mongoose')

const file = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:User,required:true},
    date:{type:Date,default:new Date.now()},
    filePath:{type:String,required:true},
})

module.exports = mongoose.model('File',file)