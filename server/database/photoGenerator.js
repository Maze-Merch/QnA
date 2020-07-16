const faker = require('faker');
const fs = require('fs');

const writePhotos = fs.createWriteStream('photos.csv');
writePhotos.write('id|url|answer_id\n', 'utf8');

function writeTenMillionPhotos(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let answer_id = id;
      const url = faker.image.imageUrl();
      const data = `${id}|${url}|${answer_id}\n`;
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

writeTenMillionPhotos(writePhotos, 'utf-8', () => {
  writePhotos.end();
});
