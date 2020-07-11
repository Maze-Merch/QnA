const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QnaSchema = new Schema({
  product_id: Number,
  question_body: String,
  question_date: { type: Date, default: Date.now },
  asker_name: String,
  question_helpfulness: Number,
  asker_email: String,
  reported: 0,
  answers: [{ // removed some complexity here, the key was also the id - fix on get response
    id: Number,
    body: String,
    date: { type: Date, default: Date.now },
    answerer_name: String,
    answerer_email: String,
    helpfulness: Number,
    reported: 0, // added - was not in api originally
    photos: [
      String, // may only be able to go one level deep - mongo nesting limit on queries
    ],
  }],
});

module.exports = { QnaSchema };
