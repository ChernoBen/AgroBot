/* eslint-disable linebreak-style */
const mongoose = require("../database/database");

const CustomerServiceSchema = new mongoose.Schema({
	client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Clients",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Clients",
        required:true
    },
	title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    },
    created_at:{type: Date, default: Date.now}

});
const CustomerService = mongoose.model("CustomerServices", CustomerServiceSchema);
module.exports = CustomerService;