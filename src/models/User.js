/* eslint-disable linebreak-style */
const mongoose = require("../database/database");

const UserSchema = new mongoose.Schema({
	name:{
        type:String,
        required:true
    },
	email:{
        type:String,
        required:true
    },
	password:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    },
    //created_at:{type: Date, default: Date.now}

});
const User = mongoose.model("Users", UserSchema);
module.exports = User;