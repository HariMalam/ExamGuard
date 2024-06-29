const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  subName: {
    type: String,
  },
  subCode: {
    type: Number,
  },
  pdf:{
    type: String,
    default: "unset"
  }
});

const Invigilator = mongoose.model('Invigilator', userSchema);
module.exports = Invigilator;
