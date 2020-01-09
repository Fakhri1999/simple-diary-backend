const router = require("express").Router();
const diaryController = require("../controllers/Diary")

router.get("/:userId", diaryController.getAllDiaryByUserId);
router.get("/:userId/:diaryId", diaryController.getSingleDiaryByUserId);
router.post("/", diaryController.insertDiary);
router.put("/", diaryController.updateDiary);
router.delete("/", diaryController.deleteDiary);

module.exports = router;