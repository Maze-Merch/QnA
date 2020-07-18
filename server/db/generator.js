const fs = require('fs');
const faker = require('faker');
const mongoose = require('mongoose');
const Schemas = require('./schema');
// mongoose config
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 100, // maintaina up to 100 socket connections
  serverSelectionTimeoutMS: 6000000, // changed to 19min
  socketTimeoutMS: 45000, // timout after 45 sec of inactivity
};
mongoose.connect('mongodb://localhost/qna', options);

const Question = mongoose.model('Question', Schemas.QnaSchema);

const insertNumber = 1000;

const createQuestion = () => {
  const answersArr = [];
  const ansPhotosArr = [];

  const questProdId = faker.random.number(20);
  const questBody = faker.random.words(8);
  const questDate = faker.date.recent();
  const questName = faker.internet.userName();
  const questHelpfulness = faker.random.number(20);
  const questEmail = faker.internet.email();
  // const questReported = 0;
  const ansId = Math.floor(Math.random() * 1000000000);
  const ansBody = faker.random.words(12);
  const ansDate = faker.date.recent();
  const ansName = faker.internet.userName();
  const ansEmail = faker.internet.email();
  const ansHelpfulness = faker.random.number(20);
  // const ansReported = 0;
  const newPhoto = faker.image.nature();
  ansPhotosArr.push(newPhoto);
  // create answers object
  const newAnsObj = {
    id: ansId,
    body: ansBody,
    date: ansDate,
    answerer_name: ansName,
    answerer_email: ansEmail,
    helpfulness: ansHelpfulness,
    reported: 0,
    photos: ansPhotosArr,
  };

  answersArr.push(newAnsObj);
  // create questions object
  const newQuestionObj = {
    product_id: questProdId,
    question_body: questBody,
    question_date: questDate,
    asker_name: questName,
    question_helpfulness: questHelpfulness,
    asker_email: questEmail,
    reported: 0,
    answers: answersArr,
  };
  return newQuestionObj;
};

const seedFile = () => {
  const t0 = new Date();
  fs.writeFileSync(__dirname + '/qnaData.json',
    '[',
    (e) => {
      if (e) console.error(e);
    },
  );

  for (let i = 0; i < insertNumber; i++) {
    const answersArr = [];
    const ansPhotosArr = [];

    const questProdId = faker.random.number(20);
    const questBody = faker.random.words(8);
    const questDate = faker.date.recent();
    const questName = faker.internet.userName();
    const questHelpfulness = faker.random.number(20);
    const questEmail = faker.internet.email();
    // const questReported = 0;
    const ansId = Math.floor(Math.random() * 1000000000);
    const ansBody = faker.random.words(12);
    const ansDate = faker.date.recent();
    const ansName = faker.internet.userName();
    const ansEmail = faker.internet.email();
    const ansHelpfulness = faker.random.number(20);
    // const ansReported = 0;
    const newPhoto = faker.image.nature();
    ansPhotosArr.push(newPhoto);
    // create answers object
    const newAnsObj = {
      id: ansId,
      body: ansBody,
      date: ansDate,
      answerer_name: ansName,
      answerer_email: ansEmail,
      helpfulness: ansHelpfulness,
      reported: 0,
      photos: ansPhotosArr,
    };

    answersArr.push(newAnsObj);
    // create questions object
    const newQuestionObj = {
      product_id: questProdId,
      question_body: questBody,
      question_date: questDate,
      asker_name: questName,
      question_helpfulness: questHelpfulness,
      asker_email: questEmail,
      reported: 0,
      answers: answersArr,
    };
    fs.writeFileSync(__dirname + '/qnaData.json',
      JSON.stringify(newQuestionObj, null, 2),
      { flag: 'as' },
      (e) => {
        if (e) console.error(e);
      },
    );
    i !== insertNumber - 1
    ? fs.writeFileSync(__dirname + '/qnaData.json', ',',
        { flag: 'as' },
        (e) => {
          if (e) console.error(e);
        },
      )
    : fs.writeFileSync(__dirname + '/qnaData.json', ']',
        { flag: 'as' },
        (e) => {
        if (e) console.error(e);
        },
      );
    if (i % 100000 === 0) console.log(`${i / 100000}%`);
  }
  const t1 = new Date();
  console.log(`Seeding took ${t1 - t0} milliseconds.`);
};

const seedDb = () => {
  const t0 = new Date();
  let i = 0;
  let docs = [];
  while (i < insertNumber) {
    const doc = createQuestion();
    docs.push(doc);
    if (docs.length === 1000) {
      Question.insertMany(docs, (err, docs) => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
      });
      docs = [];
    }
    i += 1;
  }
  const t1 = new Date();
  console.log(`Seeding took ${t1 - t0} milliseconds for ${i} records`);
};

// seedDb();

seedFile();
