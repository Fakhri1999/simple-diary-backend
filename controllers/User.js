const userModel = require("../models/User");
const userHelper = require("../helpers/UserHelper")
const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      let user = await userModel.getAllUsers();
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
  getUserByUsername: async (req, res, next) => {
    let username = req.params.username;
    try {
      let user = await userModel.getUserByUsername(username);
      if(user == ""){
        user = null
      } 
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
  insertUser: async (req, res, next) => {
    const data = req.body;
    try {
      let isUsernameUnique =
        (await userModel.getUserByUsername(data.username)).length == 0
          ? true
          : false;

      // Jika username tidak unique
      if (isUsernameUnique == false) {
        return res.status(403).json({
          status: "success",
          error: false,
          message: "Username telah digunakan oleh orang lain"
        });
      }

      let userInsert = await userModel.insertUser(userHelper.insertConfig(data));
      if (userInsert) {
        return res.status(201).json({
          status: "success",
          error: false,
          message: "Data user berhasil dimasukkan",
          data: data
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
  },
  updateUser: async (req, res, next) => {
    let id = req.params.id;
    let data = req.body;
    try {
      let isUsernameUnique = (await userModel.getUserByUsername(data.username, id)).length == 0
          ? true
          : false;

      // Jika username tidak unique
      if (isUsernameUnique == false) {
        return res.status(403).json({
          status: "success",
          error: false,
          message: "Username telah digunakan oleh orang lain"
        });
      }

      let userUpdate = await userModel.updateUser(id, userHelper.updateConfig(data));
      if (userUpdate) {
        return res.status(201).json({
          status: "success",
          error: false,
          message: "Data user berhasil diupdate",
          data: data
        });
      } else {
        return res.status(403).json({
          status: "error",
          error: true,
          message: userUpdate.message
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
  deleteUser: async (req, res, next) => {
    let id = req.params.id;
    try {
      let userDeleted = await userModel.deleteUser(id);
      if (userDeleted == id) {
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
module.exports = userController;
