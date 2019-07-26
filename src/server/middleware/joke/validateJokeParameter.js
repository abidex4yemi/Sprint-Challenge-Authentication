const { Joke } = require('../../models');
const { createError, NOT_FOUND, GENERIC_ERROR } = require('../../util/error');

/**
 * Validate joke request parameter id
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @param {*} jokeID
 */
const validateJokeParameter = async (req, res, next, jokeID) => {
  try {
    const joke = await Joke.getById(jokeID);

    if (!joke) {
      return next(
        createError({
          message: 'Joke ID is invalid.',
          status: NOT_FOUND,
        }),
      );
    }

    req.joke = joke;

    return next();
  } catch (error) {
    return next(
      createError({
        message: 'Could not get joke with the specified id',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = validateJokeParameter;
