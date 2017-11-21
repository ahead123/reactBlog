const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
const UserSchema = new Schema({
 name: String,
 email: String,
 password: String
});

UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
    	console.log('bcrypt error',err)
      return next(err);
    }
    user.password = hash;
    console.log('bcrypt hash success', user.password)
    next();
  })
});

//export our module to use in server.js
module.exports = mongoose.model('User', UserSchema);
