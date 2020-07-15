const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/routes.js');

// const controllers = require('./controllers/controller.js');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(port, () => console.log(`listening on port ${port}`));
