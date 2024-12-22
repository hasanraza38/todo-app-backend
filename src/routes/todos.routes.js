import express from "express";
import {
  addTodo,
  getAllTodo,
  getSingleTodo,
  deleteTodo,
  editTodo,
} from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/addtodo", addTodo);
router.get("/getalltodos", getAllTodo);
router.get("/getsingletodo/:id", getSingleTodo);
router.delete("/deletetodo/:id", deleteTodo);
router.put("/edittodo/:id", editTodo);

export default router;
