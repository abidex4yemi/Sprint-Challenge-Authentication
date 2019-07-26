// Get node env if exist or default to development
const env = process.env.NODE_ENV || 'development';

/**
 * Module dependencies
 */
const knexModule = require('knex');
const knexConfig = require('../knexfile');

// Initialized knex based on environment variables
const knex = knexModule(knexConfig[env]);

module.exports = knex;
