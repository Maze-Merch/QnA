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

const getProductQuestioins = (productID, callback) => {

};
const getAnswerForQuestion = (questionID, callback) => {

};
const postQuestion = (productID, callback) => {

};
const postAnswer = (questionID, callback) => {

};
const updateHelpfulQuestion = (questionID, callback) => {

};
const updateReportedQuestion = (questionID, callback) => {

};
const updateHelpfulAnswer = (answerID, callback) => {

};
const updateReportedAnswer = (answerID, callback) => {

};

module.exports = {
  testGet,
  getProductQuestioins,
  getAnswerForQuestion,
  postQuestion,
  postAnswer,
  updateHelpfulQuestion,
  updateReportedQuestion,
  updateHelpfulAnswer,
  updateReportedAnswer,
};