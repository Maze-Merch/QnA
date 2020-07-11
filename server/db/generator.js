const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv

const lines = argv.lines || 1;
const filename = argv.output || 'questions.csv';
const writeStream = fs.createWriteStream(filename);

const createQuestion = () => {
  const product_id = Math.floor(Math.random() * 1000000000);
  const question_body = faker.random.words(8);
  const question_date = faker.date.recent();
  const asker_name = faker.internet.userName();
  const question_helpfulness = faker.random.number(20);
  const asker_email = faker.internet.email();
  const reported = 0;
  let answers = [];
  // loop here twice for answers?
  let newAns = {
    const id = Math.floor(Math.random() * 1000000000);
    const body = faker.random.words(12);
    const date = faker.date.recent();
    const answerer_name = faker.internet.userName();
    const answerer_email = faker.internet.email();
    const helpfulness = faker.random.number(20);
    const reported = 0;
    let photos = [];
    let newPhoto = {
      faker.image.imageUrl()
    }
    photos.push(newPhoto);
  };
  answers.push(newAns);
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing(){
    let canWrite = true
    do {
      i--
      let question = createQuestion()
      //check if i === 0 so we would write and call `done`
      if(i === 0){
        // we are done so fire callback
        writeStream.write(question, encoding, done)
      }else{
        // we are not done so don't fire callback
        writeStream.write(question, encoding)
      }
      //else call write and continue looping
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
stream.write(`product_id,question_body,question_date,asker_name,question_helpfulness,asker_email,reported,answers,` 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})