const express = require('express');

const router = express.Router();

const controllers = require('../controllers/controller.js');

router.get('/test', controllers.controlTest);
router.get('/qa/:product_id', controllers.getProductQuestions);
router.get('/qa/:question_id/answers', controllers.getAnswerForQuestion);
router.post('/qa/:product_id', controllers.postQuestion);
router.post('/qa/:question_id/answers', controllers.postAnswer);
router.put('/qa/question/:question_id/helpful', controllers.updateHelpfulQuestion);
router.put('/qa/question/:question_id/report', controllers.updateReportedQuestion);
router.put('/qa/answer/:answer_id/helpful', controllers.updateHelpfulAnswer);
router.put('/qa/answer/:answer_id/report', controllers.updateReportedAnswer);

module.exports = router;
