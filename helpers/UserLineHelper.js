const moment = require("moment")
const userLineConfig = {
  insertConfig: userData => {
    return {
      line_u_id: userData.line_u_id,
      tanggal_dibuat: moment().format("HH:mm:ss DD-MM-YYYY"),
      tanggal_diedit: moment().format("HH:mm:ss DD-MM-YYYY")
    };
  }
};

module.exports = userLineConfig