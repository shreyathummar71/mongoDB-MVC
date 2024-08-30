const Subject = require("../schemas/Subject");

// get all subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    if (!subjects.length) {
      res.status(200).json({ msg: "No subjects in the DB" });
    } else {
      res.status(200).json({ subjects });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get one subject
const getOneSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await Subject.findById(id);

    if (subject) {
      return res.status(200).json(subject);
    }
    res.status(404).json({ msg: "Subject not found :(" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new subject
const createSubject = async (req, res) => {
  try {
    const { subject_name, description } = req.body;
    const subject = await Subject.create({ subject_name, description });
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a subject
const updateSubject = async (req, res) => {
  try {
    const { subject_name, description } = req.body;
    const { id } = req.params;

    const subject = await Subject.findByIdAndUpdate(
      id,
      { subject_name, description },
      { new: true }
    );

    if (!subject) {
      res.status(404).json({ msg: "Subject not found :(" });
    } else {
      res.status(200).json({ msg: "Subject updated successfully", subject });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a subject
const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findByIdAndDelete(id);

    if (!subject) {
      res.status(404).json({ msg: "Subject not found :(" });
    } else {
      res.status(200).json({ msg: "Subject deleted successfully", subject });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllSubjects,
  getOneSubject,
  createSubject,
  updateSubject,
  deleteSubject,
};
