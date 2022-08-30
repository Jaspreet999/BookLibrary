const mongoose = require('mongoose');
const dateTime = require('luxon'); 
const Schema = mongoose.Schema;

const user = new Schema(
    {
        date:{type:Date,default:new Date(),required:true},
        ip:{type:String}
    }
)

//get url
user.virtual('url').get(function(){
    return  this.id;
})

//get milli seconds
user.virtual('time').get(function(){
    return this.date.getTime();
})

//get date
user.virtual('getDate').get(function(){
    return dateTime.fromJsDate(this.date).toISODate();
})

module.exports = mongoose.model('User',user);