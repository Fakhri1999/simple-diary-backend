const db = require("../database");

const userLineModel = {
  getAllUsers : async () => await db("user_line_liff"),
  
  getUserByLineUserId : async (line_u_id) => await db("user_line_liff").where("line_u_id", `${line_u_id}`),
  
  insertUser : async data => await db("user_line_liff").insert(data).then(result => true),
}

module.exports = userLineModel;
