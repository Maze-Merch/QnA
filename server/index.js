const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3006;
app.use(cors());
app.use(express.static(`${__dirname}/../public`));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`listening on port ${PORT}`);
});
