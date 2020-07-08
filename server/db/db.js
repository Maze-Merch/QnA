const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/qna', {useNewUrlParser: true,  useUnifiedTopology: true});

const QnaSchema = new Schema({
  name: String,
  description: String
});
//Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.
const Question = mongoose.model('Question', QnaSchema);