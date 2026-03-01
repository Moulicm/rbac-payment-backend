const express = require("express");
const auth = require("../../middlewares/auth.middleware");
const role = require("../../middlewares/role.middleware");
const enums = require('../utils/enums');
const controller = require("./payment.controller");

const router = express.Router();

router.post("/", auth, role([enums.Roles.USER]), controller.create);
router.get("/my", auth, role([enums.Roles.USER]), controller.getMy);
router.get("/", auth, role([enums.Roles.ADMIN]), controller.getAll);

module.exports = router;