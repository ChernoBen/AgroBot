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
router.get("/users",UserController.listUsers);

router.post("/client",ClientController.create);
router.get("/clients",ClientController.listAll);
router.get("/clients/:id",ClientController.list);
router.put("/clients/:id",ClientController.update);
router.get("/client/:phone",ClientController.getByPhone);
router.get("/clientes/:cpf",ClientController.getByCpf);

router.post("/event",EventController.create);
router.get("/event",EventController.list);

router.post("/customer",CustomerController.create);
router.get("/customer",CustomerController.list);
module.exports = router;