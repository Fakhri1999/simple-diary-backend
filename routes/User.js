const router = require("express").Router();
const userController = require("../controllers/User")

router.get("/", userController.getAllUsers);
router.get("/:username", userController.getUserByUsername);
router.post("/", userController.insertUser);
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router;