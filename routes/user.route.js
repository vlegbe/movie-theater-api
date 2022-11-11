//router method
const {Router} = require("express");
const userRouter = Router();
const User = require ('../models/user.js')


userRouter.get("/", (req, res) => {})
userRouter.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).send({ user });
});



//gets all users from database using endpoint /users

app.get("/users", (req, res) => {
  res.send('Get all Users from database')
})

app.use("/.users", userRouter)


//get one user from database using endpoint /users/1

app.get("/users/1", (req, res) => {
  res.send('Get one user from database')
})

const user1 =  userRouter.get('/shows/:num')
userRouter.get("/users/:userID", (req, res) => {
  const theParam = req.params.paramName
})

module.exports = { userRouter }