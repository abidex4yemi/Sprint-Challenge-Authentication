const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const { generateToken } = require('../../util/generateToken');
const { createSuccess, CREATED } = require('../../util/success');
const { createError, GENERIC_ERROR, CONFLICT } = require('../../util/error');

/**
 * Create new user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createUser = async (req, res, next) => {
  try {
    const userDetails = req.body.sanitizedBody;

    userDetails.password = await bcrypt.hash(userDetails.password, 10);

    const user = await User.createUser(userDetails);

    const payload = {
      id: user.id,
    };

    const options = {
      expiresIn: '24h',
    };

    const token = generateToken(payload, options);

    return res.status(CREATED).json(
      createSuccess({
        message: 'New user created',
        data: {
          user,
          token,
        },
      }),
    );
  } catch (error) {
    if (error && error.code === 'SQLITE_CONSTRAINT') {
      return next(
        createError({
          message: 'User already exist',
          status: CONFLICT,
        }),
      );
    }

    return next(
      createError({
        message: 'Could not create new user',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = createUser;
