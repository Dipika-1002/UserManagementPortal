var mongoose = require('mongoose')
var url = "mongodb://localhost:27017/RegisterApi"
mongoose.connect(url)
// var db = mongoose.connection
console.log("Database connection successfully Done!!")
// module.exports = db