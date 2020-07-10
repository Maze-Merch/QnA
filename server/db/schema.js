const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QnaSchema = new Schema({
  product_id: Number,
  question_body: String,
  asker_name: String,
  asker_email: String,
});

module.exports = { QnaSchema };
