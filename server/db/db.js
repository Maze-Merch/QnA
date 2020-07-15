const mongoose = require('mongoose');
const Schemas = require('./schema');

mongoose.connect('mongodb://localhost/qna', { useNewUrlParser: true, useUnifiedTopology: true });

const Question = mongoose.model('Question', Schemas.QnaSchema);

const getQuestions = (id) => (// implicit return
  Question.find({ product_id: id }, (err, arr) => {console.log(id)})
    .then((questions) => (questions)) // implicit return
    .catch((err) => {
      console.error('Error getting questions db line 17', err);
    })
);

const addQuestion = (id, addObj) => {
  // console.log(
  //   'id= ', id,
  //   'addObj= ', addObj,
  // );
  const questObj = {
    product_id: id,
    question_body: addObj.quesbdy,
    asker_name: addObj.quesnname,
    asker_email: addObj.quesemail,
  };
  // console.log('question', questObj);
  const newQuest = new Question(questObj);
  return newQuest.save()
    .then(() => ('Question added successfully'))
    .catch((err) => console.error('Error adding question to database', err));
};

const addAnswer = (id, addAnsObj) => {
  const ansId = Math.floor(Math.random() * 1000000000);
  const ansObj = {
    id: ansId,
    body: addAnsObj.ansbdy,
    answerer_name: addAnsObj.ansnname,
    answerer_email: addAnsObj.ansemail,
    photos: [],
  };
  console.log('ansObj', ansObj);
  return Question.updateOne(
    { _id: id },
    { $push: { answers: ansObj } },
  ).then(() => ('Answer added successfully'))
    .catch((err) => console.error('Error adding answer to database', err));
};

module.exports = {
  getQuestions,
  addQuestion,
  addAnswer,
};
