const express = require('express');
const router = express.Router();
const weatherService = require('../weather.service');


router.get('/', function (req, res) {
    res.send('API works!');
});
router.get('/weather/:city', (req, res) => {
    weatherService.getWeather(req, res);
  
});
  

module.exports = router;