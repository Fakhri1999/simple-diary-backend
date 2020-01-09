const diaryModel = require("../models/Diary");
const diaryHelper = require("../helpers/DiaryHelper")
const diaryController = {
  getAllDiaryByUserId: async (req, res, next) => {
    let userId = req.params.userId;
    try {
      let diary = await diaryModel.getAllDiaryByUserId(userId);
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
      let diary = await diaryModel.getSingleDiaryByUserId(userId, diaryId);
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
    let { username, password } = req.body;
    let diaryData = req.body.diaryData;
    try {
      let where = {
        username,
        password,
        id: diaryData.id_user
      };
      let checkAuth = (await diaryModel.checkAuth(where)).length > 0;
      if (!checkAuth) {
        return res.status(403).json({
          status: "error",
          error: true,
          message: "Akses ditolak"
        });
      }
      let diaryInsert = await diaryModel.insertDiary(diaryHelper.insertConfig(diaryData));
      if (diaryInsert == true) {
        return res.status(201).json({
          status: "success",
          error: false,
          message: "Data diary berhasil dimasukkan",
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
  updateDiary: async (req, res, next) => {
    let diaryId = req.body.id_diary;
    let { username, password } = req.body;
    let diaryData = req.body.diaryData;

    try {
      let where = {
        username,
        password,
        id: diaryData.id_user
      };
      let checkAuth = (await diaryModel.checkAuth(where)).length > 0;
      if (!checkAuth) {
        return res.status(403).json({
          status: "error",
          error: true,
          message: "Akses ditolak"
        });
      }
      let diaryUpdate = await diaryModel.updateDiary(diaryHelper.updateConfig(diaryData), diaryId);
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
    let diaryId = req.body.id_diary;
    let { username, password, diaryData } = req.body;
    try {
      let where = {
        username,
        password,
        id: diaryData.id_user
      };
      let checkAuth = (await diaryModel.checkAuth(where)).length > 0;
      if (!checkAuth) {
        return res.status(403).json({
          status: "error",
          error: true,
          message: "Akses ditolak"
        });
      }
      let diaryDeleted = await diaryModel.deleteDiary(diaryId);
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
