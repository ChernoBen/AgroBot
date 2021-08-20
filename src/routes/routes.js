/* eslint-disable linebreak-style */
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const ClientController = require("../controllers/ClientController");

router

router.use((req, res, next)=> {
	next();
});

router.post("/register",UserController.create);
router.auth("/auth",UserController.auth);

router.post("/client",ClientController.create);
router.get("/client/:id",ClientController.list);
router.put("/client/:id",ClientController.update);

module.exports = router;