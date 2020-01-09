const db = require('../database')

const diaryLineModel = {
  getAllDiaryByLineUserId: async line_u_id => await db.select("d.id", "d.judul", "d.isi", "d.tanggal").from("diary_line_liff as d").innerJoin("user_line_liff as u", "u.id", "d.id_user").where('u.line_u_id', `${line_u_id}`),

  getSingleDiaryByLineUserId: async (line_u_id, diaryId) => await db.select("d.id", "d.judul", "d.isi", "d.tanggal").from("diary_line_liff as d").innerJoin("user_line_liff as u", "u.id", "d.id_user").where('u.line_u_id', `${line_u_id}`).andWhere('d.id', `${diaryId}`),

  insertDiary: async data => await db("diary_line_liff").insert(data).then(result => true),

  updateDiary: async (data, diaryId) => await db("diary_line_liff").where('id', `${diaryId}`).update(data).then(result => true),

  deleteDiary: async (diaryId) => await db("diary_line_liff").where('id', `${diaryId}`).del().then(result => diaryId)
}

module.exports = diaryLineModel