const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/config");
const secret = keys.secret;
const Customer = require("../models/CustomerService");
const { ObjectId } = require("mongodb");

class CustomerController{
    async create(req,res){
        let{
            clientId,
            userId,
            title,
            description,
            status
        } = req.body;
        if(!clientId)return res.status(400).json({error:"id do cliente nao infromado"});
        if (!userId)return res.status(400).json({error:"Id do consultor nao infromado"});
        if (!title || !description)return res.status(400).json({error:"nao foi informado titulo ou descrição da consulta"});
        if(status != true )status = false;
        if (!clientid || !title || !description)return res.status(400).json({error:"Bad request"});
        let result =  new Customer({
            client:ObjectId(clientId),
            user:userId,
            title,
            description,
            status
        });
        try{
          await result.save();
          return res.status(201);  
        }catch(error){
            return res.status(500);
        }
    }

    async list(req,res){
        //listar eventos aparenas para clientes que assinam plano
        let events = await Customer.find({});
        if(!events) return res.status(200).json({data:[]})
        return res.status(200).json({data:events});
    }

    //TODO: update status da consultoria
    
}
module.exports = new CustomerController();