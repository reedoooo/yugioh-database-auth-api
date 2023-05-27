'use strict';

require('dotenv').config();

const server = require('./src/server');
const PORT = process.env.PORT || 3001
const { userDB } = require('./src/auth/models/index')
const { cardAndDecksDB } = require('./src/models/index');
 console.log('cardAndDecksDB', cardAndDecksDB.models)
userDB.sync()
.then(async () => {
  await cardAndDecksDB.sync();
})
.then(() => {
  server.start(PORT);
})
