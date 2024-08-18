import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  skills: { type: String, required: true },
  link: { type: String, required: true },
  role: { type: String, required: true },
  workedOn: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
