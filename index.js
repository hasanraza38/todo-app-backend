import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express()
const port = process.env.PORT;

app.use(express.json());


const users = [
  {

    title:"hsan",
    id : Date.now(),
  }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// add new user 


app.post("/user" , (req , res) => {
  const {title } = req.body;
  if (!title) {
    res.status(400).json({
      message : "title required"
    })
    return;
  }
  
  users.push({
    title,
    id : Date.now(),
  })

  res.status(201).json({
    message :"user is created",
    data : users,
  });
  
})


//get all users

app.get("/users" ,(req, res) =>{
  res.status(200).json({
    data : users
  })
})


// app.get('/about', (req, res) => {
//   res.send('Hello about!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})