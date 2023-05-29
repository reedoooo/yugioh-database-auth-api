'use strict';
//------------------------------------------------------SERVER------------------------------------------------------//
const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const logger = require('./middleware/logger');

const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');

const authRoutes = require('./auth/authRoutes.js');
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const v3Routes = require('./routes/v3');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger); // Log every request to the console

app.use(cors());
// app.use(morgan('dev'));
app.use('/api/v7', v3Routes)
app.use('/api/v1', v1Routes)

app.use(authRoutes);
app.use('/api/v2', v2Routes);

app.use('*', notFoundHandler)

app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};