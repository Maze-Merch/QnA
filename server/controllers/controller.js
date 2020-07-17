const models = require('../models/models.js');

const controlTest = (req, res) => {
  // console.log(req.query);
  // console.log(req.params);
  const { id } = req.params;
  models.testGet(id, (error, result) => {
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
  // const q_id = req.params.q_id;
  const { id } = req.params;
  models.getProductQuestions(id, (error, result) => {
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

const getAnswerForQuestion = (req, res) => {
  console.log(req.params);
  const { q_id } = req.params;
  models.getAnswerForQuestion(q_id, (error, result) => {
    if (error) {
      console.log('opps get product quest error', error);
    } else {
      console.log('product get success');
      res.json({
        result,
      });
    }
  });
};






const postQuestion = (req, res) => {
  const { q_id } = req.query;
  models.postQuestion(q_id, (error, result) => {
    if (error) {
      // console.log('oops post question failed');
      console.log(error);
    } else {
      console.log('question post success');
      res.json({
        result,
      });
    }
  });
};

const postAnswer = (req, res) => {
  models.postAnswer((error, result) => {
    if (error) {
      // console.log('oops post question failed');
      console.log(error);
    } else {
      console.log('question post success');
      res.json({
        result,
      });
    }
  });
};

const updateHelpfulQuestion = (req, res) => {
  const { q_id } = req.query;
  models.updateHelpfulQuestion(q_id, (error, result) => {
    if (error) {
      console.log('update helpfull question controller fail', error);
    } else {
      console.log('update helpful question Success');
      res.json({
        result,
      });
    }
  });
};

const updateReportedQuestion = (req, res) => {
  const { q_id } = req.query;
  models.updateReportedQuestion(q_id, (error, result) => {
    if (error) {
      console.log('update reported question controller fail', error);
    } else {
      console.log('update helpful question Success');
      res.json({
        result,
      });
    }
  });
};

const updateHelpfulAnswer = (req, res) => {
  const { a_id } = req.query;
  models.updateHelpfulAnswer(a_id, (error, result) => {
    if (error) {
      console.log('update helpful answer controller fail', error);
    } else {
      console.log('update helpful question Success');
      res.json({
        result,
      });
    }
  });
};

const updateReportedAnswer = (req, res) => {
  const { a_id } = req.query;
  models.updateReportedAnswer(a_id, (error, result) => {
    if (error) {
      console.log('update reported answer controller fail', error);
    } else {
      console.log('update helpful question Success');
      res.json({
        result,
      });
    }
  });
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
