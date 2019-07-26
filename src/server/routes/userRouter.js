const express = require('express');
const { createUser } = require('../controllers/users');
const { validateUserBody } = require('../middleware/user');

const router = express.Router();

router.route('/register').post(validateUserBody, createUser);

module.exports = router;
