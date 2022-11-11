// importing express package etc...

const express = require('express')
const app = express()
const port = 3000
const userRouter = require("./routes/user.route.js");
const db = require("./db/db");

app.get('/', (req, res) => {
  res.send('Initializing port...')
})
// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})




module.exports = {express}