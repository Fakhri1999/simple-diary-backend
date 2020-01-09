const router = require("express").Router();
const userLineController = require("../controllers/UserLine")

router.get("/", userLineController.getAllUsers);
router.get("/:line_u_id", userLineController.getUserByLineUserId);
router.post("/", userLineController.insertUser);

module.exports = router;