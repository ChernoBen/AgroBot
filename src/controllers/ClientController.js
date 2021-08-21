const Client = require("../models/Client");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const keys = require("../config/config");
const secret = keys.secret;

class ClientController {
    async create(req,res){
        //preciso do nome, numero e cpf
        const { 
            name,
            cpf,
            phone,
            place,
         } = req.body;
		if (name == "" || cpf == "" || phone == "")return res.sendStatus(400);     
        try {
			const client = await Client.findOne({ "cpf": cpf });
			if (client != undefined) { return res.status(400).json({ error: "User already registered" }); }
			const newClient = new Client({ name, cpf, phone,place });
			await newClient.save();
			res.status(201).json({ data:name});
		}catch (error) {
			return res.status(500);
		}
    }

    //obter todos os clientes
    async listAll(req,res){
        let result = await Client.find({});
        if(!result)return res.status(200).json([]);
        return res.status(200).json({data:result});
    }

    //obter cliente passando ID
    async getByPhone(req,res){
        let phone = req.params.phone;
        if (phone==undefined)return res.status(400).json({error:"telefone irregular"});
        phone = parseInt(phone);
        let result = await Client.find({"phone":phone});
        if(!result)return res.status(404).json({error:"Usuario não encontrado"});
        return res.status(200).json({data:result});
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
                            place:item.place,
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
            name,
            phone,
            plan
        } = re.body;
        let clientId = req.params.id;
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
            { _id:ObjectId(clientId) },
            {name:name},
            {phone:phone},
            {plan:plan},
            { new: true },
            async (err, client) => {
                if (err) {
                    return res.status(500).json({message:"Internal Error!"});
                }
                return res.status(202);
            });
    }
}

module.exports = new ClientController();