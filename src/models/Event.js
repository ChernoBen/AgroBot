/* eslint-disable linebreak-style */
const mongoose = require("../database/database");

const EventSchema = new mongoose.Schema({
	client:{
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
    location:[String],
    created_at:{type: Date, default: Date.now}

});
const Event = mongoose.model("Events", EventSchema);
module.exports = Event;