const { Joke } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');
const { createSuccess, CREATED } = require('../../util/success');

/**
 * Add new joke
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addJoke = async (req, res, next) => {
  try {
    const jokeDetails = req.body.sanitizedBody;

    const joke = await Joke.insert(jokeDetails);

    return res.status(CREATED).json(
      createSuccess({
        message: 'Joke created',
        data: joke,
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not create new joke',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = addJoke;
