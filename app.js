const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const winston = require('./logger/index');
const router = require('./routes/index');
const { jsonSchemaValidation } = require('./middlewares/JsonSchemaValidation');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));

app.use('/api', router);

// Validador del requiest
app.use(jsonSchemaValidation);

module.exports = app;
