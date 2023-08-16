const express = require('express');
const router = express.Router();
const {displayTrip} = require('../controllers/trip');

router.post('/sort', displayTrip);

module.exports = router;