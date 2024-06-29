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
  action: {
    type: String,
    default: "unset"
  }
});

const Examiner = mongoose.model('Examiner', userSchema);
module.exports = Examiner;
