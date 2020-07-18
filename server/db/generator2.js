const fs = require('fs');
const faker = require('faker');

const insertNumber = 4743226;

const seedFile = () => {
  const t0 = new Date();
  fs.writeFileSync(__dirname + '/qnaData.json',
    '[',
    (e) => {
      if (e) console.error(e);
    });

  for (let i = 0; i < insertNumber; i++) {
    const questProdId = faker.random.number(200000);
    const questBody = faker.random.words(8);
    const questDate = faker.date.recent();
    const questName = faker.internet.userName();
    const questHelpfulness = faker.random.number(20);
    const questEmail = faker.internet.email();
    const ansId = Math.floor(Math.random() * 1000000000);
    const ansBody = faker.random.words(12);
    const ansDate = faker.date.recent();
    const ansName = faker.internet.userName();
    const ansEmail = faker.internet.email();
    const ansHelpfulness = faker.random.number(20);
    const newPhoto = faker.image.nature();

    // create answers object
    const newAnsObj = {
      id: ansId,
      body: ansBody,
      date: ansDate,
      answerer_name: ansName,
      answerer_email: ansEmail,
      helpfulness: ansHelpfulness,
      reported: 0,
      photos: [newPhoto],
    };

    // create questions object
    const newQuestionObj = {
      product_id: questProdId,
      question_body: questBody,
      question_date: questDate,
      asker_name: questName,
      question_helpfulness: questHelpfulness,
      asker_email: questEmail,
      reported: 0,
      answers: [newAnsObj],
    };
    fs.writeFileSync(__dirname + '/qnaData.json',
      JSON.stringify(newQuestionObj, null, 2),
      { flag: 'as' },
      (e) => {
        if (e) console.error(e);
      });
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
    if (i % 47432 === 0) console.log(`${i / 47432}%`);
  }
  const t1 = new Date();
  console.log(`Seeding took ${t1 - t0} milliseconds.`);
};

seedFile();
