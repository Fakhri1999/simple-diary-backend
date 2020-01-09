const moment = require("moment")
const diaryLineConfig = {
  insertConfig: (diaryData, userId) => {
    return {
      id_user: userId,
      judul: diaryData.judul,
      isi: diaryData.isi,
      tanggal: diaryData.tanggal,
      tanggal_dibuat: moment().format("HH:mm:ss DD-MM-YYYY"),
      tanggal_diedit: moment().format("HH:mm:ss DD-MM-YYYY")
    };    
  },
  updateConfig: diaryData => {
    return {
      judul: diaryData.judul,
      isi: diaryData.isi,
      tanggal: diaryData.tanggal,
      tanggal_diedit: moment().format("HH:mm:ss DD-MM-YYYY")
    };
  }
};

module.exports = diaryLineConfig