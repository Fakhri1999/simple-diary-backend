const diaryLineModel = require("../models/DiaryLine");
const userLineModel = require("../models/UserLine");
const diaryLineHelper = require("../helpers/DiaryLineHelper")
const diaryController = {
  getAllDiaryByLineUserId: async (req, res, next) => {
    let line_u_id = req.params.line_u_id;
    try {
      let diary = await diaryLineModel.getAllDiaryByLineUserId(line_u_id);
      return res.status(200).json({
        status: "success",
        error: false,
        data: diary
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  },
  getSingleDiaryByUserId: async (req, res, next) => {
    let userId = req.params.userId;
    let diaryId = req.params.diaryId;
    try {
      let diary = await diaryLineModel.getSingleDiaryByUserId(userId, diaryId);
      return res.status(200).json({
        status: "success",
        error: false,
        data: diary
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  },
  insertDiary: async (req, res, next) => {
    let diaryData = req.body;
    try {
      let user = await userLineModel.getUserByLineUserId(diaryData.line_u_id)
      let diaryInsert = await diaryLineModel.insertDiary(diaryLineHelper.insertConfig(diaryData, user[0].id));
      if (diaryInsert == true) {
        return res.status(201).json({
          status: "success",
          error: false,
          message: "Data diary berhasil dimasukkan",
          data: diaryData
        });
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  },
  updateDiary: async (req, res, next) => {
    let diaryId = req.body.diaryId;
    let line_u_id = req.body.line_u_id;
    let diaryData = req.body.diaryData;

    try {
      let checkAuth = (await diaryLineModel.getSingleDiaryByLineUserId(line_u_id, diaryId)).length > 0;
      if (!checkAuth) {
        return res.status(403).json({
          status: "error",
          error: true,
          message: "Akses ditolak"
        });
      }
      let diaryUpdate = await diaryLineModel.updateDiary(diaryLineHelper.updateConfig(diaryData), diaryId);
      if (diaryUpdate == true) {
        return res.status(201).json({
          status: "success",
          error: false,
          message: "Data diary berhasil diupdate",
          data: diaryData
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  },
  deleteDiary: async (req, res, next) => {
    let diaryId = req.body.diaryId;
    let line_u_id = req.body.line_u_id;
    try {
      let checkAuth = (await diaryLineModel.getSingleDiaryByLineUserId(line_u_id, diaryId)).length > 0;
      if (!checkAuth) {
        return res.status(403).json({
          status: "error",
          error: true,
          message: "Akses ditolak"
        });
      }
      let diaryDeleted = await diaryLineModel.deleteDiary(diaryId);
      if (diaryDeleted == diaryId) {
        return res.status(204).json({});
      }
    } catch (error) {
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  }
};
module.exports = diaryController;
