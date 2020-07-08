const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const QnaSchema = new Schema({

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
          id: Number,
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
