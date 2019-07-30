const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const {
  createError, UNAUTHORIZED, GENERIC_ERROR, BAD_REQUEST,
} = require('../../util/error.js');

/**
   * Verifies user provided token
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const verifyToken = async (req, res, next) => {
  const token = req.get('Authorization');

  const secretKey = process.env.SECRET_KEY;

  // check if token is provided
  if (!token) {
    return next(
      createError({
        status: UNAUTHORIZED,
        message: 'Unauthorized!, you have to login',
      }),
    );
  }

  try {
    // verify user provided token against existing token
    const decoded = jwt.verify(token, secretKey);

    const user = await User.getById(decoded.id);

    // check for valid app users
    if (!user) {
      return next(
        createError({
          status: UNAUTHORIZED,
          error: 'The token you provided is invalid',
        }),
      );
    }

    // makes user object available through request object
    req.user = decoded;

    return next();
  } catch (errors) {
    if (errors.name && errors.name === 'TokenExpiredError') {
      return next(
        createError({
          status: BAD_REQUEST,
          message: 'Token expired, login again.',
        }),
      );
    }

    return next(
      createError({
        message: 'Could not verify token',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = verifyToken;
