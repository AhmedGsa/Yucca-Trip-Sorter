const express = require('express');
const router = express.Router();
const {displayTrip} = require('../controllers/trip');

router.get('/sort', displayTrip);

module.exports = router;