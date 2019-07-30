const Joi = require('@hapi/joi');
const joiValidate = require('../../util/joiValidate');

/**
 * Users validation schema
 */
const userSchema = Joi.object().keys({
  first_name: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .error(() => 'First name is required and must be alphabet')
    .max(100)
    .label('First name')
    .trim()
    .required(),
  last_name: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .error(() => 'Last name is required and must be alphabet')
    .max(100)
    .label('Last name')
    .trim()
    .required(),
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
 * Validate user body against defined schema
 */
const validateUserBody = (req, res, next) => joiValidate(req, res, next, userSchema);

module.exports = validateUserBody;
