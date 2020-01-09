const moment = require("moment")
const diaryConfig = {
  insertConfig: diaryData => {
    return {
      id_user: diaryData.id_user,
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

module.exports = diaryConfig