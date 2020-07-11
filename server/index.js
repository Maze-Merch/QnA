const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const db = require('./db/db');

const app = express();
const port = 3003;

app.use(cors());
app.use(express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

// QUESTIONS
// list questions for particular product
app.get('/qa/:product_id', (req, res) => {
  db.getQuestions()
    .then((data) => (res.status(200).send(data)))
    .catch((err) => {
      res.status(500).send('Error getting questions = ', err);
    });
});
// add a question
app.post('/qa/:product_id', (req, res) => {
  db.addQuestion(req.params.product_id, req.body)
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
app.put('/qa/:question_id/answers', (req, res) => {
  db.addAnswer(req.params.question_id, req.body)
    .then((data) => (res.status(201).send(data)))
    .catch((err) => (console.error('Error adding answer', err)));
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
