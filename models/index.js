const { Show } = require('./Show')
const { User } = require('./User')
const userRouter = require

Show.belongsTo(User)
User.hasMany(Show)

module.exports = {Show, User}
