const mongoose = require('mongoose');


const resumeSchema = new mongoose.Schema({
     fname: {
          type: String
     },
     lname: {
          type: String
     },
     address: {
          type: String
     },
     city: {
          type: String
     },
     zipcode: {
          type: String
     },
     country: {
          type: String
     },
     email: {
          type: String
     },
     phone: {
          type: String
     },
     employer: {
          type: String
     },
     jobtitle: {
          type: String
     },
     jobcity: {
          type: String
     },
     jobstate: {
          type: String
     },
     jobstartdate: {
          type: String
     },
     jobenddate: {
          type: String
     },
     schoolname: {
          type: String
     },
     schoolcity: {
          type: String
     },
     schoolstate: {
          type: String
     },
     schooldegree: {
          type: String
     },
     fieldofstudy: {
          type: String
     },
     gdate: {
          type: String
     },
     skill1: {
          type: String
     },
     skill1level: {
          type: String
     },
     skill2: {
          type: String
     },
     skill2level: {
          type: String
     },
     skill3: {
          type: String
     },
     skill3level: {
          type: String
     },
     skill4: {
          type: String
     },
     skill4level: {
          type: String
     },
     skill5: {
          type: String
     },
     skill5level: {
          type: String
     },
     summary: {
          type: String
     },
     userId: {
          type: String
     }
})

const RESUME = mongoose.model('RESUME', resumeSchema);

module.exports = RESUME;