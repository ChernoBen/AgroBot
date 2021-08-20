/* eslint-disable linebreak-style */
require('dotenv/config');
module.exports = {
	apiPort:process.env.API_PORT,
	secret:process.env.SECRET,
	mgHost: process.env.HOST,
	mgDatabase: process.env.MONGO_INITDB_DATABASE,
	mgPort: process.env.ME_CONFIG_MONGODB_PORT,
	DB_URI: process.env.DB_URI
};