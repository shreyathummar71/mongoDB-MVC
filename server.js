const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("colors");

const student = require("./routes/student");
const grade = require("./routes/grade");
const teacher = require("./routes/teacher");
const subject = require("./routes/subject");

const connectDB = require("./dbinit");

connectDB();

// usual middleware
app.use(express.json());
app.use(cors());

// form submission
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/api/students", student);
app.use("/api/grades", grade);
app.use("/api/teachers", teacher);
app.use("/api/subjects", subject);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.rainbow);
});
