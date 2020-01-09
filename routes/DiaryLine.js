const router = require("express").Router();
const diaryLineController = require("../controllers/DiaryLine")

router.get("/:line_u_id", diaryLineController.getAllDiaryByLineUserId);
router.get("/:line_u_id/:diaryId", diaryLineController.getSingleDiaryByUserId);
router.post("/", diaryLineController.insertDiary);
router.put("/", diaryLineController.updateDiary);
router.delete("/", diaryLineController.deleteDiary);

module.exports = router;