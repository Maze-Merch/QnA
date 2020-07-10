const mongoose = require('mongoose');
const QnaSchema = require('./schema');

mongoose.connect('mongodb://localhost/qna', { useNewUrlParser: true, useUnifiedTopology: true });

const Question = mongoose.model('Question', QnaSchema);

const getQuestions = () => (
  Question.find() // implicit return
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
  const question = {
    product_id: id,
    question_body: addObj.quesbdy,
    asker_name: addObj.quesnname,
    asker_email: addObj.quesemail,
  };
  console.log('question', question);
  // const newQuest = new Question(question);
  return Question.create(question)
    .then(() => ('Question added successfully'))
    .catch((err) => console.error('Error adding question to database', err));
};

module.exports = {
  getQuestions,
  addQuestion,
};
