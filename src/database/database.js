const keys = require("./config/config");
const mongoose = require("mongoose");
mongoose.connect(`mongodb://${keys.mgHost}:${keys.mgPort}/${keys.mgDatabase}`,{ useNewUrlParser: true, useUnifiedTopology: true })
	.catch(error => {
		console.log(error);
	});
module.exports = mongoose;