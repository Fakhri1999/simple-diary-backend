const db = require('../database')

const diaryModel = {
  getAllDiaryByUserId : async userId => await db('diary').where('id_user', `${userId}`),

  getSingleDiaryByUserId : async (userId, diaryId) => await db('diary').where('id_user', `${userId}`).andWhere('id', `${diaryId}`),

  insertDiary : async data => await db('diary').insert(data).then(result => true),

  checkAuth : async (where) => await db('user').where(where),

  updateDiary : async (data, diaryId) => await db('diary').where('id', `${diaryId}`).update(data).then(result => true),

  deleteDiary : async (diaryId) => await db('diary').where('id', `${diaryId}`).del().then(result => diaryId)
}

module.exports = diaryModel