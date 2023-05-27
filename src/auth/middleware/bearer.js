"use strict";

// Import the users model from the models directory
const { users } = require("../models");

// Define an Express middleware function for bearer token authentication
module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { _authError() }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateToken(token);
    console.log('BEARER AUTH TOKEN: ', validUser);
    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    _authError();
  }

  function _authError() {
    res.status(401).json({ message: 'Your request was received, but you are not authorized' });
    // next('Invalid Login')
  }
}
