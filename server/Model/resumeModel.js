const mongoose = require('mongoose');


const resumeSchema = new mongoose.Schema({
     firstname: {
          type: String,
          required: [true, 'Please enter first name!']
     },
     lastname: {
          type: String,
          required: [true, 'Please enter last name!']
     },
     address: {
          type: String,
          required: [true, 'Please Enter Address!']
     },
     city: {
          type: String,
          required: [true, 'Please enter city!']
     },
     ZIPcode: {
          type: Number,
          required: [true, 'Please enter ZIP code!']
     },
     country: {
          type: String,
          required: [true, 'please enter your country']
     },
     phone: {
          type: String,
          required: [true, 'please enter your phone number!']
     },
     employer: {
          type: String
     },
     Jobtitle: {
          type: String
     },
     employeCity: {
          type: String
     },
     employeState: {
          type: String
     },
     employeStartdate: {
          type: String
     },
     employeEnddate: {
          type: String
     },
     Jobdescription: {
          type: String
     },
     SchoolName: {
          type: String
     },
     eductionCity: {
          type: String
     },
     eductionState: {
          type: String
     },
     eductionDegree: {
          type: String
     },
     Fieldofstudy: {
          type: String
     },
     Graduationdate: {
          type: String
     },
     skill1: {
          type: String,
          required: [true, 'Enter skill']
     },
     skill1Level: {
          type: String,
          required: [true, 'Enter skill level']
     },
     skill2: {
          type: String
     },
     skill2Level: {
          type: String
     },
     skill3: {
          type: String
     },
     skill3Level: {
          type: String
     },
     skill4: {
          type: String
     },
     skill4Level: {
          type: String
     },
     skill5: {
          type: String
     },
     skill5Level: {
          type: String
     },
     summary: {
          type: String,
          required: [true, 'Please Enter Summary!']
     }
})

const RESUME = mongoose.model('RESUME', resumeSchema);

module.exports = RESUME;