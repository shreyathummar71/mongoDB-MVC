const express = require("express");
const {
  getAllGrades,
  getOneGrade,
  createGrade,
  updateGrade,
  deleteGrade,
} = require("../controllers/grade");

const api = express.Router();

api.route("/").get(getAllGrades).post(createGrade);
api.route("/:id").get(getOneGrade).put(updateGrade).delete(deleteGrade);

module.exports = api;
