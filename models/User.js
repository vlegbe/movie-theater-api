//import our db, Model, DataTypes
const { Model, DataTypes } = require('sequelize')
const db = require ('../db/db')

const User = db.define("users", {
    username: DataTypes.STRING,
    allowNull: false, 
}),
//Creating a User child class from the Model parent class

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
},
{
    sequelize: db,
    modelName: "User",
  }

);



//exports
module.exports = { User}