const { Joke } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../util/error');
const { OK, createSuccess } = require('../../util/success');

/**
 * Get joke by id provided the id is valid
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getJokeById = async (req, res, next) => {
  try {
    const { joke } = req;

    return res.status(OK).json(
      createSuccess({
        data: joke,
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not get joke with specified id',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getJokeById;
