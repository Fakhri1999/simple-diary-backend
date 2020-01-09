require("dotenv").config();

const DATABASE = {
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_CLIENT: process.env.DB_CLIENT
};

module.exports = DATABASE
