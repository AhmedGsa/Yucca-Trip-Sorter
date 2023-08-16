const express = require('express');
const { addCard } = require('../controllers/cards');
const router = express.Router();

router.post("/", addCard);

module.exports = router;