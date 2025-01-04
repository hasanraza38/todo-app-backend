import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDB from "./src/db/index.js";
import todosRoutes from "./src/routes/todos.routes.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes

app.use("/api/v1", todosRoutes);
// routes

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
