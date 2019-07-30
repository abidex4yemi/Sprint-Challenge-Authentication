const { Joke } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');
const { createSuccess, OK } = require('../../util/success');

/**
 * Delete joke by id given the joke id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteJokeById = async (req, res, next) => {
  try {
    const { joke } = req;

    await Joke.remove(joke.id);

    return res.status(OK).json(
      createSuccess({
        data: joke,
        message: 'Joke deleted',
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could delete joke with the given id',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = deleteJokeById;
