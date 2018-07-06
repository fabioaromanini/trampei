const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const { Schema } = mongoose;

const trampoSchema = new Schema({
  userId: String,
  userName: String,
  trampo: String,
  when: String,
  where: String,
  contact: String,
  value: Schema.types.Double,
});

mongoose.model('trampos', trampoSchema);
