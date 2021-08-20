const Client = require("../models/Client");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const keys = require("../config/config");
const secret = keys.secret;

class ClientController {
    async create(req,res){
        //preciso do nome, numero e cpf
        const { name, cpf, number } = req.body;
		if (name == "" || cpf == "" || password == "")return res.sendStatus(400);
		try {
			const client = await Client.findOne({ "cpf": cpf });
			if (cpf != undefined) { return res.status(400).json({ error: "User already registered" }); }
			const newClient = new User({ name, cpf, number });
			await newClient.save();
			res.status(201).json({ data:name});
		}catch (error) {
			res.status(500);
		}
    }

    async list(req, res) {
        //preciso listar todos os clientes para o admin
		if (!req.headers["authorization"]) return res.status(401);
        const clientId = req.params.id;
		let list = [];
		try {
			const token = req.headers["authorization"];
			if (token != undefined) {
				const bearer = token.split(" ");
				const tk = bearer[1];
				const decoded = jwt.verify(tk, secret);
                if(!clientId){
                    const resul = await Client.find({});
                    resul.forEach(item=>{
                        let data = {
                            id:item_id,
                            name:item.name,
                            cpf:item.cpf,
                            phone:item.phone,
                            plan:item.plan,
                            created_at:item.created_at
                        }
                        list.push(data);
                        return res.status(200).json({data})
                    })
                }else {
                    const result = await Client.find({ "_id":ObjectId(clientId)});
                    result.forEach(item => {
                        let data = {
                            id:item_id,
                            name:item.name,
                            cpf:item.cpf,
                            phone:item.phone,
                            plan:item.plan,
                            created_at:item.created_at
                        };
                        list.push(data);
				    });
				    return res.json(list);
                }
			} else {
				return res.status(401);
			}
		} catch {
			return res.status(401);
		}
	}

    async update(req,res){
        let {
            name = req.body.name,
            number = req.body.number,
            plan = req.body.plan
        };

        try{
            const token = req.headers["authorization"];
			if (token != undefined) {
				const bearer = token.split(" ");
				const tk = bearer[1];
				const decoded = jwt.verify(tk, secret);
            }else{
                return res.status(403);
            }
        }catch(error){
            return res.status(500);
        }

        // podendo atualizar apenas nome, numero e plano passando id como parametro
        await Client.findByIdAndUpdate(
            { _id:ObjectId(user._id) },
            {name:name},
            {number:number},
            {plan:plan},
            { new: true },
            async (err, client) => {
                if (err) {
                    return res.status(500).json({message:"Internal Error!"});
                }
                return res.status(201);
            });
    }
}

module.exports = new ClientController();