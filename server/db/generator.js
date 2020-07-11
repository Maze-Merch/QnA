const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv

const lines = argv.lines || 100;
const filename = argv.output || 'questions.csv';
const writeStream = fs.createWriteStream(filename);

const createQuestion = () => {
  const product_id:
  const question_body:
  const question_date: { type: Date, default: Date.now },
  const asker_name:
  const question_helpfulness:
  const asker_email:
  const reported: 0,
  const answers: [{ // removed some complexity here, the key was also the id - fix on get response
    const id:  // will use same function as above or a variable so it doesn't run again?
    const body:
    const date: { type: Date, default: Date.now },
    const answerer_name:
    const answerer_email:
    const helpfulness:
    const reported: 0, // added - was not in api originally
    const photos: [],
  }],
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing(){
    let canWrite = true
    do {
      i--
      let post = createQuestion()
      //check if i === 0 so we would write and call `done`
      if(i === 0){
        // we are done so fire callback
        writeStream.write(post, encoding, done)
      }else{
        // we are not done so don't fire callback
        writeStream.write(post, encoding)
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
stream.write(`userId,title,content,image,date\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})