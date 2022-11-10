// importing express package etc...

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

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

 //get all shows watched by a user


router.get("/shows", (req, res) => {
  const from = req.params[0]
  const to = req.params[1] || "User's Shows"
  res.send(`commit range ${from}..${to}`)
})




module.exports = {express}