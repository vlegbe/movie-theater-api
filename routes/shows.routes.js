//import paclages

const showsRouter = 


//get all shows watched by a user


router.get("/shows", (req, res) => {
  const from = req.params[0]
  const to = req.params[1] || "User's Shows"
  res.send(`commit range ${from}..${to}`)
})


module.exports = {}