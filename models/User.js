//import our db, Model, DataTypes
const { db, Model, DataTypes } = require('../db')

//Creating a User child class from the Model parent class
const User = db.define("users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
});

console.log('User has been created')

//exports
module.exports = { User }