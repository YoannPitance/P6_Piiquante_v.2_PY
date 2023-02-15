const express = require("express");
const router = express.Router();
const multer = require("../middlewares/multer-config");

const sauceCtrl = require("../controllers/sauce-ctrl");
const likeCtrl = require("../controllers/likes");
const auth = require("../middlewares/auth");

router.get("/", auth, sauceCtrl.getAllSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, likeCtrl.likeSauce);

module.exports = router;
