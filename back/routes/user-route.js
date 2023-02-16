const express = require("express");
const router = express.Router();
const checkPassword = require("../middlewares/password");

const userCtrl = require("../controllers/user-ctrl");

router.post("/signup", checkPassword, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
