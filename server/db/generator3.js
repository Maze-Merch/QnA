const fs = require('fs');
const faker = require('faker');

// const insertNumber = 10;

const writeStream = fs.createWriteStream(__dirname + '/dump.json', { objectMode: true });
writeStream.write('[', 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

const writeData = (writer, encoding, cb) => {
  let i = 1000;
  const t0 = new Date();
  const write = () => {
    let ok = true;

    do {
      i -= 1;

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
      // create final questions object
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
      const data = JSON.stringify(newQuestionObj);
      if (i === 0) {
        writer.write(data, encoding, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
    // fs.writeStream.write(JSON.stringify(newQuestionObj, null, 2));
    // if (i % 37432 === 0) console.log(`${i / 37432}%`);

    const t1 = new Date();
    console.log(`Seeding took ${t1 - t0} milliseconds.`);
  };
  write();
};

writeData(writeStream, 'utf-8', () => {
  writeStream.end();
});
