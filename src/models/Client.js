/* eslint-disable linebreak-style */
const mongoose = require("../database/database");

const ClientSchema = new mongoose.Schema({
	name:{
        type:String,
        required:true
    },
	cpf:{
        type:Number,
        Unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    plan:{
        type:String,
        default:"free"  
    },
    created_at:{type: Date, default: Date.now}

});
const Client = mongoose.model("Clients", CLientSchema);
module.exports = Client;