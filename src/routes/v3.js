const express = require("express");
const axios = require("axios");
const router = express.Router();

// Create axios instance with base URL
const instance = axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/",
});
console.log('v7 reached')
// console.log('instance', instance);
// console.log('instance', instance.get);
router.get("/api/v7", async (req, res) => {
    try {
      const { name, race, type, level, attribute } = req.query;
      const response = await instance.get(`/cardinfo.php?${queryBuilder(name, race, type, level, attribute)}`);
    console.log(req.query);
    // const response = await instance.get(`/cardinfo.php?${req.query}`);
    console.log(response.data.data)
      res.json(response.data);
    } catch (err) {
      res.status(500).send(err);
    }
});

function queryBuilder(name, race, type, level, attribute) {
  return `name=${name}&race=${race}&type=${type}&level=${level}&attribute=${attribute}`;
}

module.exports = router;
