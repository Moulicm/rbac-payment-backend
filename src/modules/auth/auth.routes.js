const express = require("express");
const controller = require("./auth.controller");

const router = express.Router();

// Define the routes and map them to the controller functions
router.post("/register", controller.register);
router.post("/login", controller.login);

// IMPORTANT: This is the line that fixes the 'argument handler must be a function' error
module.exports = router;