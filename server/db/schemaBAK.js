const mongoose = require('mongoose');

const { Schema } = mongoose;

const QnaSchema = new Schema({

  _id: Number,
  product_id: Number,
  results: [
    {
      question_id: Number,
      question_body: String,
      question_date: { type: Date, default: Date.now },
      asker_name: String,
      question_helpfulness: Number,
      reported: 0,
      answers: {
        10: { // This id needs to match the id below??? Autogenerate both?
          id: Number, // will use same function as above or a variable so it doesn't run again?
          body: String,
          date: { type: Date, default: Date.now },
          answerer_name: String,
          helpfulness: Number,
          photos: [
            String,
          ],
        },
      },
    },
  ],
});

module.exports = { QnaSchema };
