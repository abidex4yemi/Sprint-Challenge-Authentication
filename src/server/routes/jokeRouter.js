const express = require('express');
const {
  getJokes, getJokeById, deleteJokeById, addJoke,
} = require('../controllers/jokes');
const { validateJokeParameter, validateJokeBody } = require('../middleware/joke');
const verifyToken = require('../middleware/auth/verifyToken');

const router = express.Router();
router.param('id', validateJokeParameter);

router
  .route('/jokes')
  .all(verifyToken)
  .post(validateJokeBody, addJoke)
  .get(getJokes);

router
  .route('/jokes/:id')
  .all(verifyToken)
  .get(getJokeById)
  .delete(deleteJokeById);

module.exports = router;
