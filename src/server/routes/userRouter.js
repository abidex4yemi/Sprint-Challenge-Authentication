const express = require('express');
const { createUser, login } = require('../controllers/users');
const { validateUserBody, validateLoginBody } = require('../middleware/user');

const router = express.Router();

router.route('/register').post(validateUserBody, createUser);
router.route('/login').post(validateLoginBody, login);

module.exports = router;
