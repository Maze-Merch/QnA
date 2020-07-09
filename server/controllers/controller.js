const modles = require('../modles/modles.js');

const controlTest = (req, res) => {
  modles.testGet((error, result) => {
    if (error) {
      console.log('testGetRequest Failed to get any data', error);
    } else {
      console.log('testGetSucceded');
      res.json({
        result,
      });
    }
  });
};

const getProductQuestions = (req, res) => {

};
const getAnswerForQuestion = (req, res) => {

};
const postQuestion = (req, res) => {

};
const postAnswer = (req, res) => {

};
const updateHelpfulQuestion = (req, res) => {

};
const updateReportedQuestion = (req, res) => {

};
const updateHelpfulAnswer = (req, res) => {

};
const updateReportedAnswer = (req, res) => {

};

module.exports = {
  controlTest,
  getProductQuestions,
  getAnswerForQuestion,
  postQuestion,
  postAnswer,
  updateHelpfulQuestion,
  updateReportedQuestion,
  updateHelpfulAnswer,
  updateReportedAnswer,
};
