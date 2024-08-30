const Teacher = require("../schemas/Teacher");

// get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    if (!teachers.length) {
      res.status(200).json({ msg: "No teachers in the DB" });
    } else {
      res.status(200).json({ teachers });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get one teacher
const getOneTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);

    if (teacher) {
      return res.status(200).json(teacher);
    }
    res.status(404).json({ msg: "Teacher not found :(" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new teacher
const createTeacher = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const teacher = await Teacher.create({ first_name, last_name, email });
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a teacher
const updateTeacher = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const { id } = req.params;

    const teacher = await Teacher.findByIdAndUpdate(
      id,
      { first_name, last_name, email },
      { new: true }
    );

    if (!teacher) {
      res.status(404).json({ msg: "Teacher not found :(" });
    } else {
      res.status(200).json({ msg: "Teacher updated successfully", teacher });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a teacher
const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    const teacher = await Teacher.findByIdAndDelete(id);

    if (!teacher) {
      res.status(404).json({ msg: "Teacher not found :(" });
    } else {
      res.status(200).json({ msg: "Teacher deleted successfully", teacher });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
