const express = require("express");
const {
  getAllSubjects,
  getOneSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} = require("../controllers/subject");

const api = express.Router();

api.route("/").get(getAllSubjects).post(createSubject);
api.route("/:id").get(getOneSubject).put(updateSubject).delete(deleteSubject);

module.exports = api;
