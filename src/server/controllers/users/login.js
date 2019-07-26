const bcrypt = require('bcryptjs');
const { generateToken } = require('../../util/generateToken');
const { User } = require('../../models');
const {
  createError, NOT_FOUND, GENERIC_ERROR, BAD_REQUEST,
} = require('../../util/error');
const { createSuccess, OK } = require('../../util/success');

/**
 * Log existing user in
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const login = async (req, res, next) => {
  try {
    const credential = req.body.sanitizedBody;

    const user = await User.getByEmail(credential.email);

    if (!user || Object.keys(user).length === 0) {
      return next(
        createError({
          message: 'User does not exist',
          status: NOT_FOUND,
        }),
      );
    }

    const isPasswordValid = await bcrypt.compare(credential.password, user.password);

    if (!isPasswordValid) {
      return next(
        createError({
          message: 'Invalid email/password',
          status: BAD_REQUEST,
        }),
      );
    }

    const payload = {
      id: user.id,
    };

    const options = {
      expiresIn: '1h',
    };

    const token = generateToken(payload, options);

    return res.status(OK).json(
      createSuccess({
        message: 'Log in successful',
        data: {
          user,
          token,
        },
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not log user in',
        status: GENERIC_ERROR,
      }),
    );
  }
};
module.exports = login;
