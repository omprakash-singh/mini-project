const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userFacebookSchema = new mongoose.Schema({
     name: {
          type: String
     },
     id: {
          type: Number
     }
});
userFacebookSchema.plugin(findOrCreate);
const USERFACBOOK = mongoose.model("USERFACBOOK", userFacebookSchema);

module.exports = USERFACBOOK;
