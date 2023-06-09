'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('./models');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js')
const permissions = require('./middleware/acl.js')

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      username: userRecord.username, // Add the username to the output
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message);
  }
});


authRouter.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    username: req.user.username, // Add the username to the user object
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});


authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to the secret area')
});

module.exports = authRouter;