const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/config");
const secret = keys.secret;
const Event = require("../models/Event");
const { ObjectId } = require("mongodb");

class EventController{
    async create(req,res){
        let{
            clientId,
            title,
            description,
            location
        } = req.body;
        if (!clientId || !title || !description)return res.status(400).json({error:"Bad request"});
        let result =  new Event({
            client:ObjectId(clientId),
            title,
            description,
            location
        });
        try{
            await result.save();
            return res.status(201).json({message:"ok"});  
        }catch(error){
            return res.status(500).json({error:"Internal server error"});
        }
    }

    async list(req,res){
        //listar eventos aparenas para clientes que assinam plano
        let events = await Event.find({});
        if(!events) return res.status(200).json({data:[]})
        return res.status(200).json({data:events});
    }
    
}
module.exports = new EventController();