//router method
const {Router} = require("express");
const userRouter = Router();
const User = require (../models/user)


userRouter.get("/", (req, res) => {})
userRouter.post("/", (req, res) => {})

//gets all users from database using endpoint /users

app.get("/users", (req, res) => {
  res.send('Get all Users from database')
})

app.use("/users", userRouter)


//get one user from database using endpoint /users/1

app.get("/users/1", (req, res) => {
  res.send('Get one user from database')
})

 
