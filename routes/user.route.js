//router method
const {Router} = require("express");
const { Show } = require("../models/Show.js");
const userRouter = Router();
const User = require ('../models/User.js')


userRouter.get("user", (req, res) => {})
userRouter.post("/user", async (req, res) => {
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

const user1 =  userRouter.get('/shows/:userId')
userRouter.get("/users/:userID", (req, res) => {
  const userId = req.params.userId
  await User.findByPk(Show)
  res.send(await user.getShows())
})

module.exports = { userRouter}