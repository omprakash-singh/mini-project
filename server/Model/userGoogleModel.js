const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userGoogleSchema = new mongoose.Schema({
     sub: {
          type: String
     },
     name: {
          type: String
     },
     given_name: {
          type: String
     },
     family_name: {
          type: String
     },
     picture: {
          type: String
     },
     email: {
          type: String,
          unique: true,
          lowercase: true
     },
     email_verified: {
          type: Boolean
     },
     locale: {
          type: String
     }
})
userGoogleSchema.plugin(findOrCreate);

const USERGOOGLE = mongoose.model('USERGOOGLE', userGoogleSchema);

module.exports = USERGOOGLE;