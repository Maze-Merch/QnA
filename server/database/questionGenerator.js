const faker = require('faker');
const fs = require('fs');

const writeQuestion = fs.createWriteStream('questions.csv');
writeQuestion.write('q_id|q_body|q_date|asker_name|q_helpful|product_id\n', 'utf8');
// may need to insert for

function writeTenMillionProducts(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const q_body = faker.lorem.sentence();
      const q_date = faker.date.past();
      const asker_name = faker.internet.userName();
      const q_helpful = faker.random.number();
      const product_id = id;
      // const q_reported = faker.random.number();
      const data = `${id}|${q_body}|${q_date}|${asker_name}|${q_helpful}|${product_id}\n`;
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

writeTenMillionProducts(writeQuestion, 'utf-8', () => {
  writeQuestion.end();
});
