const express = require('express');

const router = express.Router();

const controllers = require('../controllers/controller.js');

router.get('/test/:id', controllers.controlTest);
router.get('/qa/:id', controllers.getProductQuestions);
router.get('/qa/:q_id/answers', controllers.getAnswerForQuestion);
router.post('/qa/:product_id', controllers.postQuestion);
router.post('/qa/:question_id/answers', controllers.postAnswer);
router.put('/qa/question/helpful', controllers.updateHelpfulQuestion);
router.put('/qa/question/report', controllers.updateReportedQuestion);
router.put('/qa/answer/helpful', controllers.updateHelpfulAnswer);
router.put('/qa/answer/report', controllers.updateReportedAnswer);

module.exports = router;
