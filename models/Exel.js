const mongoose = require('mongoose');

const excelSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model('Exel', excelSchema);
