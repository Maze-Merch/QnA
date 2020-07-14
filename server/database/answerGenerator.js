const faker = require('faker');
const fs = require('fs');

const writeAnswers = fs.createWriteStream('answers.csv');
writeAnswers.write('a_id|a_body|a_date|answerer_name|a_helpful|a_reported|photo_id|question_id\n', 'utf8');
// may need to insert for

function writeTenMillionAnswers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const a_body = faker.lorem.sentences();
      const a_date = faker.date.past();
      const answerer_name = faker.internet.userName();
      const a_helpful = faker.random.number(1);
      const a_reported = faker.random.number(1);
      const photo_id = id;
      const question_id = id;

      // const photos_id = {};
      // const question_id = {};
      const data = `${id}|${a_body}|${a_date}|${answerer_name}|${a_helpful}|${a_reported}|${photo_id}| ${question_id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
};

writeTenMillionAnswers(writeAnswers, 'utf-8', () => {
  writeAnswers.end();
});