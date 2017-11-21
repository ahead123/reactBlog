const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
const UserSchema = new Schema({
 name: String,
 email: String,
 password: String
});

//export our module to use in server.js
module.exports = mongoose.model('User', UserSchema);
