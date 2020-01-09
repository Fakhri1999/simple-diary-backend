const db = require("../database");

const userModel = {
  getAllUsers : async () => await db("user"),
  
  getUserByUsername : async (username, id = null) => await id == null ? db("user").where("username", `${username}`) : db('user').where('username', username).whereNot('id', id),
  
  insertUser : async data => await db("user").insert(data).then(result => true),

  updateUser : async (id, data) => await db("user").where('id', id).update(data).then(result => true),

  deleteUser : async id => await db('user').where('id', id).del().then(result => id)
}

module.exports = userModel;
