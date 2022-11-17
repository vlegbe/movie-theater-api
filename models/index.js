const { Show } = require('./Show')
const { User } = require('./User')


Show.belongsTo(User)
User.hasMany(Show)
Show.belongsToMany(User, { through: "User_Shows" })
User.belongsToMany(Show, { through: "Shows_User" })

module.exports = { Show, User }