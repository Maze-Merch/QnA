const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

const controllers = require('./controllers/controller.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/test', controllers.controlTest);

app.listen(port, () => console.log(`listening on port ${port}`));
