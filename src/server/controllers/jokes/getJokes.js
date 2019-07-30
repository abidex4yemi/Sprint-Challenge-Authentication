const { Joke } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');
const { createSuccess, OK } = require('../../util/success');

/**
 * Get all jokes
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getJokes = async (req, res, next) => {
  try {
    const jokes = await Joke.getAll();

    return res.status(OK).json(
      createSuccess({
        data: jokes,
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not get jokes',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getJokes;
