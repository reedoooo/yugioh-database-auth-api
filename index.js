require('dotenv').config();

const server = require('./src/server');
const { userDB } = require('./src/auth/models/index')
const { cardAndDecksDB } = require('./src/models/index');

const PORT = process.env.PORT || 3001;
console.log('cardsAndDecksDB', cardAndDecksDB.models);
Promise.all([userDB.sync(), cardAndDecksDB.sync()])
  .then(() => {
    server.start(PORT);
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });
