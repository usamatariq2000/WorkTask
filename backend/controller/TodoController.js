const { response } = require("express");
const TodoModel = require("../models/TodoModel");

module.exports.testData = async (req, res) => {
  res.set(201).send("added successfully");
};

module.exports.getToDo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.send(Todo);
};

module.exports.savetToDo = async (req, res) => {
  const { text, isComplete } = req.body;

  try {
    const newTodo = await TodoModel.create({ text, isComplete });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding todo");
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  TodoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully"))
    .catch((err) => console.log(err));
};

module.exports.UpdateToDo = async (req, res) => {
  const { _id, isComplete } = req.body;
  TodoModel.findByIdAndUpdate(_id, { isComplete })
    .then(() => res.set(201).send("Updated Successfully"))
    .catch((err) => console.log(err));
};
