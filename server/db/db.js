const mongoose = require('mongoose');
const QnaSchema = require('./schema');

mongoose.connect('mongodb://localhost:27017/qna', { useNewUrlParser: true, useUnifiedTopology: true });

// Every model has an associated connection. When you use mongoose.model(),
// your model will use the default mongoose connection.
const Question = mongoose.model('Question', QnaSchema);

// start queries here:
