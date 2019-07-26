const Joi = require('@hapi/joi');
const joiValidate = require('../../util/joiValidate');

/**
 * Joke validation schema
 */
const jokeSchema = Joi.object().keys({
  joke: Joi.string()
    .min(4)
    .trim()
    .required(),
});

/**
 * Validate Joke body against defined schema
 */
const validateJokeBody = (req, res, next) => {
  joiValidate(req, res, next, jokeSchema);
};

module.exports = validateJokeBody;
