const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 1231;

const userRoutes = require("./routes/User");
const userLineRoutes = require("./routes/UserLine");
const diaryRoutes = require("./routes/Diary");
const diaryLineRoutes = require("./routes/DiaryLine");

require("./database");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/diary", diaryRoutes);
app.use("/user-line", userLineRoutes);
app.use("/diary-line", diaryLineRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World"
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
