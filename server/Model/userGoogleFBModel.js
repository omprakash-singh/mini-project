const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userGoogleFBSchema = new mongoose.Schema({
     googleID: {
          type: String
     },
     facebookID: {
          type: String
     },
     provider: {
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
userGoogleFBSchema.plugin(findOrCreate);

const USERGOOGLEFB = mongoose.model('USERGOOGLEFB', userGoogleFBSchema);

module.exports = USERGOOGLEFB;