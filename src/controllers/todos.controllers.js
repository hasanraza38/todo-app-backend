import mongoose from "mongoose";
import Todos from "../models/todos.model.js";

//Add Todo

const addTodo = async (req , res) => {
    const { title , description } = req.body;

    if (!title || !description ) {
        res.status(400).json({
            message: "title or description required"
        })
        return;
    }

    const todo = await Todos.create({
        title,
        description,
    })

    res.status(201).json({
        message: "user added successfully"
    })
}

//Add Todo



export default addTodo