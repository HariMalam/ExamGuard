const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: "unset",
  },
  role: {
    type: String,
    required: true,
    enum: ['Administrator','Examiner', 'Invigilator']
  },
  phone: {
    type: String
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
