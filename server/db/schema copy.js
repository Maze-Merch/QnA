const mongoose = require('mongoose');

const { Schema } = mongoose;

const QnaSchema = new Schema({

  product_id: Number,
  // question_id: Number,
  question_body: String,
  // question_date: { type: Date, default: Date.now },
  asker_name: String,
  // question_helpfulness: Number,
  asker_email: String,
  // reported: 0,
  // answers: [{ // removed some complexity here, the key was also the id - fix on get response
  //   id: Number, // will use same function as above or a variable so it doesn't run again?
  //   body: String,
  //   date: { type: Date, default: Date.now },
  //   answerer_name: String,
  //   helpfulness: Number,
  //   reported: 0, // added - was not in api originally
  //   photos: [
  //     String, // may only be able to go one level deep - mongo nesting limit on queries
  //   ],
  // }],

});

module.exports = { QnaSchema };
