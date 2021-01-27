const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003;
app.use(cors());
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});
app.use(express.static(`${__dirname}/../public`));

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`listening on port ${PORT}`);
});
