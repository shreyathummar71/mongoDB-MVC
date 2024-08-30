const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema({
  grade_name: {
    type: String,
    required: true,
    minLength: [1, "Minimum length is 1 character"],
    maxLength: 10,
  },
  description: {
    type: String,
    maxLength: 200,
  },
});

module.exports = mongoose.model("Grade", GradeSchema);
