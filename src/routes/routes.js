/* eslint-disable linebreak-style */
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const ClientController = require("../controllers/ClientController");
const CustomerController = require("../controllers/CustomerController");
const EventController = require("../controllers/EventController");

router.use((req, res, next)=> {
	next();
});

router.post("/register",UserController.create);
router.post("/auth",UserController.auth);

router.post("/client",ClientController.create);
router.get("/client",ClientController.listAll);
router.get("/client/:id",ClientController.list);
router.put("/client/:id",ClientController.update);
router.get("/client/:phone",ClientController.getByPhone);

router.post("/event",EventController.create);
router.get("/event",EventController.list);

router.post("/customer",CustomerController.create);
router.get("/customer",CustomerController.list);
module.exports = router;