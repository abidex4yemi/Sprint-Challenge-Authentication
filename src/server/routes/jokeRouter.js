const express = require('express');
const { getJokes, getJokeById, deleteJokeById } = require('../controllers/jokes');
const { validateJokeParameter } = require('../middleware/joke');
const verifyToken = require('../middleware/auth/verifyToken');

const router = express.Router();
router.param('id', validateJokeParameter);

router
  .route('/jokes')
  .all(verifyToken)
  .get(getJokes);

router
  .route('/jokes/:id')
  .all(verifyToken)
  .get(getJokeById)
  .delete(deleteJokeById);

module.exports = router;
