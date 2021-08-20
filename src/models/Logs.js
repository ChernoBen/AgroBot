/* eslint-disable linebreak-style */
const mongoose = require("../database/database");

const LogSchema = new mongoose.Schema({
	Log:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
	table_name:{
        type:String,
        required:true
    },
    action:{
        type:String,
        required:true
    },
    created_at:{type: Date, default: Date.now}

});
const Log = mongoose.model("Logs", LogSchema);
module.exports = Log;