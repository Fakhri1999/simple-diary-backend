const moment = require("moment")
const userConfig = {
  insertConfig: userData => {
    return {
      username: userData.username,
      password: userData.password,
      nama_lengkap: userData.nama_lengkap,
      email: userData.email,
      tanggal_dibuat: moment().format("HH:mm:ss DD-MM-YYYY"),
      tanggal_diedit: moment().format("HH:mm:ss DD-MM-YYYY")
    };
  },
  updateConfig: userData => {
    return {
      username: userData.username,
      password: userData.password,
      nama_lengkap: userData.nama_lengkap,
      email: userData.email,
      tanggal_diedit: moment().format("HH:mm:ss DD-MM-YYYY")
    };
  }
};

module.exports = userConfig