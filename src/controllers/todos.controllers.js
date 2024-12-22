import mongoose from "mongoose";
import Todos from "../models/todos.model.js";

//Add Todo

const addTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "title or description required",
    });
    return;
  }

  const todo = await Todos.create({
    title,
    description,
  });

  res.status(201).json({
    message: "todo added successfully",
  });
};

//Add Todo

//getalltodo
const getAllTodo = async (req, res) => {
  const todos = await Todos.find({});
  res.status(200).json({
    todos,
  });
};
//getalltodo

// getsingletodo
const getSingleTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = await Todos.findById(id);
  if (!todo) {
    res.status(404).json({
      message: "no todo found",
    });
  }

  res.status(200).json(todo);
};
// getsingletodo

// deletetodo

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = await Todos.findOneAndDelete({ _id: id });

  res.status(200).json({
    message: "todo deleted successfully",
    todo,
  });
};
// deletetodo

// edittodo

const editTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = Todos.findOneAndUpdate(
    {
      _id: id,
    },
    { ...req.body }
  );

  if (!todo) {
    return res.status(404).json({ message: "todo not found" });
  }
  res.json(todo);
};

// edittodo

export { addTodo, getAllTodo, getSingleTodo, deleteTodo, editTodo };
