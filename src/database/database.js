const keys = require("../config/config");
const mongoose = require("mongoose");
//"mongodb://localhost:27017/apendendoMongo",{useNewUrlParser:true,useUnifiedTopology:true}
mongoose.connect(keys.ATLAS_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
	.catch(error => {
		console.log(error);
	});
module.exports = mongoose;