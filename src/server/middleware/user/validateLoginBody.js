const Joi = require('@hapi/joi');

const joiValidate = require('../../util/joiValidate');

/**
 * Users login validation schema
 */
const loginSchema = Joi.object().keys({
  password: Joi.string()
    .min(6)
    .max(100)
    .label('Password')
    .trim()
    .required(),
  email: Joi.string()
    .email()
    .label('Email')
    .trim()
    .required(),
});

/**
 * Validate login body against defined schema
 */
const validateLoginBody = (req, res, next) => {
  joiValidate(req, res, next, loginSchema);
};

module.exports = validateLoginBody;
