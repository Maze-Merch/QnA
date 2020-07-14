const faker = require('faker');
const db = require('../database/dbConnection.js');

const testGet = (callback) => {
  const queryString = 'SELECT id, url FROM public.photos;';
  db.query(queryString, (error, results) => {
    if (error) {
      callback('modles testGet failed', error);
    } else {
      callback(null, results);
    }
  });
};

const getProductQuestions = (query, callback) => {
  // const queryString = 'SELECT id, url FROM public.photos;';
  const queryString = 'SELECT * FROM public.questions WHERE q_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles get question failed', error);
    } else {
      callback(null, results);
    }
  });
};

const getAnswerForQuestion = (query, callback) => {
  const queryString = 'SELECT * FROM public.answers WHERE a_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles get answer failed', error);
    } else {
      callback(null, results);
    }
  });
};

const questionToInsert = [
  `${10000002}`,
  `${faker.lorem.sentences()}`,
  `${faker.date.past()}`,
  `${faker.internet.userName()}`,
  `${faker.random.number(1)}`,
];

const postQuestion = (query, callback) => {
  const queryString = 'INSERT INTO public.questions(q_id, q_body, q_date, asker_name, q_helpful)VALUES ($1, $2, $3, $4, $5)';
  db.query(queryString, questionToInsert, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const answerToInsert = [
  `${10000001}`,
  `${faker.lorem.sentences()}`,
  `${faker.date.past()}`,
  `${faker.internet.userName()}`,
  `${faker.random.number(1)}`,
  `${faker.random.number(1)}`,
];

const postAnswer = (callback) => {
  const queryString = 'INSERT INTO public.answers(a_id, a_body, a_date, answerer_name, a_helpful, a_reported) VALUES ($1, $2, $3, $4, $5, $6)';
  db.query(queryString, answerToInsert, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const updateHelpfulQuestion = (query, callback) => {
  const queryString = 'UPDATE public.questions SET q_helpful=1 WHERE q_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const updateReportedQuestion = (query, callback) => {
  const queryString = 'UPDATE public.questions SET q_helpful=1 WHERE q_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const updateHelpfulAnswer = (query, callback) => {
  const queryString = 'UPDATE public.answers SET a_helpful=1 WHERE a_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles update helpful answer failed', error);
    } else {
      callback(null, results);
    }
  });
};

const updateReportedAnswer = (query, callback) => {
  const queryString = 'UPDATE public.answers SET a_reported=1 WHERE a_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles update reported answer failed', error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  testGet,
  getProductQuestions,
  getAnswerForQuestion,
  postQuestion,
  postAnswer,
  updateHelpfulQuestion,
  updateReportedQuestion,
  updateHelpfulAnswer,
  updateReportedAnswer,
};
