const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true,
    minLength: [2, "Minimum length is 2 characters"],
    maxLength: 100,
  },
  description: {
    type: String,
    maxLength: 200,
  },
});

module.exports = mongoose.model("Subject", SubjectSchema);
