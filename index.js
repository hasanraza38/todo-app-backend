import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDB from "./src/db/index.js";
import todosRoutes from "./src/routes/todos.routes.js";

const app = express();
const port = process.env.PORT;


app.listen(port, () => {
  console.log(`API listening on PORT ${port} `)
})

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes

app.use("/api/v1", todosRoutes);
// routes




// Do NOT call app.listen — instead, export a handler
// let server;

// const connectAndExport = async () => {
//   await connectDB();
//   server = serverlessExpress({ app });
// };

// connectAndExport();

// export const handler = async (event, context) => {
//   if (!server) {
//     await connectAndExport();
//   }
//   return server(event, context);
// };

connectDB()
  

module.exports = app