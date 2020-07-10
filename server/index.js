const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
// const mongoose = require('mongoose');
// const Schemas = require('./db/schema');

const db = require('./db/db');

const app = express();
const port = 3003;
const productId = 5;

// mongoose.connect('mongodb://localhost/qna', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const Quest = mongoose.model('Quest', Schemas.QnaSchema);

app.use(cors());
app.use(express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

// QUESTIONS
// list questions for particular product
app.get('/qa/:product_id', (req, res) => {

  db.getQuestions()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send('Error getting questions = ', err);
    });
});
// add a question
app.post('/qa/:product_id', (req, res) => {
// app.post('/', (req, res) => {
  // console.log(req.body);
  // let questObj = {
  //   product_id: parseInt(req.params.product_id),
  //   question_body: req.body.quesbdy,
  //   asker_name: req.body.quesnname,
  // };
  // console.log('questObj', questObj);
  db.addQuestion(req.params.product_id, req.body)
  // const newQuest = new Quest(questObj);
  // console.log('newQuest', newQuest);
  // newQuest.save((err, newQuest) => {
  //   if (err) {
  //     return console.error(err);
  //   }
  // });
    .then((data) => (res.status(201).send(data)))
    .catch((err) => (console.error('Error adding question', err)));
});
// report a question
app.put('/qa/:questions_id/report', (req, res) => {
  // res 204 NO CONTENT
});
// mark a question as helpful
app.put('/qa/:questions_id/helpful', (req, res) => {
  // res 204 NO CONTENT
});

// ANSWERS
// get answers for given question
app.get('/qa/:questions_id/answers', (req, res) => {
  // res 200
});
// add an answer
app.post('/qa/:question_id/answers', (req, res) => {
  // res 201 CREATED
});
// mark answer as helpful
app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  // res 204 NO CONTENT
});
// report an answer
app.put('/qa/answer/:answer_id/report', (req, res) => {
  // res 204 NO CONTENT
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
