const express = require('express');
const { getJokes } = require('../controllers/jokes');
const verifyToken = require('../middleware/auth/verifyToken');

const router = express.Router();

router.route('/jokes').get(verifyToken, getJokes);

module.exports = router;
