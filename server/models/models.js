const faker = require('faker');
const db = require('../database/dbConnection.js');
// 'select product.id, question.q_id, question.q_body, question.q_date, question.asker_name, question.q_helpful, question.product_id, answers.a_id, answers.a_body, answers.a_date, answers.answerer_name, answers.a_helpful, photos.url from product join questions on product.id = questions.product_id join answers on questions.q_id = answers.question_id join photos on answers.a_id = photos.answers_id'
// const testGet = (ids, callback) => {
//   db.query('select product.id from product join questions on product.id = questions.product_id join answers on questions.q_id = answers.question_id join photos on answers.a_id = photos.answer_id where product.id = $1', [ids])
//     .then((response) => {
//       console.log('response', response)
//       return response
//     })
//     .catch((err) => {
//       console.log('error', err)
//     })
//     // .then(() => db.query('SELECT * FROM public.questions WHERE q_id=1')
//     // .then((response) => {
//     //   console.log(response)
//     //   return
//     // })
//     // .then('SELECT * FROM public.answers WHERE a_id=$1')
// };



const testGet = (query, callback) => {
  const queryString = 'select product.id, q_id, q_body, q_date, asker_name, q_helpful, product_id, a_id, a_body, a_date, answerer_name, a_helpful, url from product join questions on product.id = questions.product_id join answers on questions.q_id = answers.question_id join photos on answers.a_id = photos.answer_id where product.id = $1';
  // return db.query(queryString, [query])
  db.query(queryString, [query], (error, results) => {
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
