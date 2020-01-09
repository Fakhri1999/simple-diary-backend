const userLineModel = require("../models/UserLine");
const userLineHelper = require("../helpers/UserLineHelper");
const userLineController = {
  getAllUsers: async (req, res, next) => {
    try {
      let user = await userLineModel.getAllUsers();
      return res.status(200).json({
        status: "success",
        error: false,
        data: user
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  },
  getUserByLineUserId: async (req, res, next) => {
    let line_u_id = req.params.line_u_id;
    try {
      let user = await userLineModel.getUserByLineUserId(line_u_id);
      if (user == "") {
        user = null;
      }
      return res.status(200).json({
        status: "success",
        error: false,
        data: user
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: "error",
        error: true,
        message: error.message
      });
    }
  },
  insertUser: async (req, res, next) => {
    const data = req.body;
    try {
      let userInsert = await userLineModel.insertUser(
        userLineHelper.insertConfig(data)
      );
      if (userInsert == true) {
        return res.status(201).json({
          status: "success",
          error: false,
          message: "Data user berhasil dimasukkan",
          data: userInsert
        });
      } else {
        return res.status(403).json({
          status: "error",
          error: true,
          message: userInsert.message
        });
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

module.exports = userLineController;
