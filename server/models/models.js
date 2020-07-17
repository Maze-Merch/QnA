const faker = require('faker');
const db = require('../database/dbConnection.js');

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
/* WORKING
const testGet = (query, callback) => {
  const queryString = 'SELECT * FROM product JOIN questions ON product.id = questions.product_id JOIN answers ON questions.q_id = answers.question_id JOIN photos ON answers.a_id = photos.answer_id WHERE answers.a_id = $1';
  // return db.query(queryString, [query])
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles testGet failed', error);
    } else {
      callback(null, results);
    }
  });
};
*/
const getProductQuestions = (query, callback) => {
  // const queryString = 'SELECT id, url FROM public.photos;';
  const queryString = 'SELECT * FROM product JOIN questions ON product.id = questions.product_id JOIN answers ON questions.q_id = answers.question_id JOIN photos ON answers.a_id = photos.answer_id WHERE answers.a_id = $1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles get question failed', error);
    } else {
      callback(null, results);
    }
  });
};
/* needed shape
{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": 0,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
 *
 *
 */
const getAnswerForQuestion = (query, callback) => {
  console.log(query);
  const queryString = 'SELECT * FROM answers WHERE answers.a_id=$1';
  db.query(queryString, [query], (error, results) => {
    if (error) {
      callback('modles get answer failed', error);
    } else {
      callback(null, results);
    }
  });
};

/* needed shape
*{
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    }
*/






const questionToInsert = [
  `${10000002}`,
  `${faker.lorem.sentences()}`,
  `${faker.date.past()}`,
  `${faker.internet.userName()}`,
  `${faker.random.number(1)}`,
];
// query the lasst row in db ....... make insert id the result id+1
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
  // testGet,
  getProductQuestions,
  getAnswerForQuestion,
  postQuestion,
  postAnswer,
  updateHelpfulQuestion,
  updateReportedQuestion,
  updateHelpfulAnswer,
  updateReportedAnswer,
};
