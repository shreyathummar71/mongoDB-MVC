const express = require("express");

// import all the controllers
const {
  getAllStudent,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteOneStudent,
} = require("../controllers/student");

// create a new instance or express router
const api = express.Router();

// decide which controllers to execute on the specific actions
api.route("/").get(getAllStudent).post(createStudent);

api
  .route("/:id")
  .get(getOneStudent)
  .put(updateStudent)
  .delete(deleteOneStudent);

module.exports = api;
