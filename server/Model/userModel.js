const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const user = new mongoose.Schema({
     name: {
          type: String,
          required: [true, 'Please enter name'],
     },
     email: {
          type: String,
          required: [true, "Please Enter email"],
          unique: true,
          lowercase: true,
          validate: [validator.isEmail, "Please provide a valid email"]
     },
     password: {
          type: String,
          required: [true, "please provide a password!"],
          select: false
     },
     confirmPassword: {
          type: String,
          required: [true, "Please confirm your password!"],
          validate: {

               validator: function (el) {
                    return el === this.password
               },
               message: "Password is not Same!!"
          }
     }
});

user.pre('save', async (next) => {
     if (!this.isModified('password')) return next();

     this.password = await bcrypt.hash(this.password, 12);

     this.confirmPassword = undefined;
     next();
});

user.method.correctPassword = async (candidatePassword, userPassword) => {
     return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model("User", user);

module.exports = User;