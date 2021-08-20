/* eslint-disable linebreak-style */
const mongoose = require("../database/database");

const UserSchema = new mongoose.Schema({
	name:String,
	email:String,
	password:String,
    occupation:String,
    admin:Boolean,
    created_at:Date.now()

});
const User = mongoose.model("Users", UserSchema);
module.exports = User;