const joi = require('joi');

module.exports = joi.object({
  passwordLength: joi.number()
  .required()
  .messages({
    'any.empty': '"passwordLength" is required',
    'number.required': '"passwordLength" must be a number',
  }),
  numbers: joi.bool()
    .required()
    .messages({
      'any.empty': '"numbers" is required',
      'bool.required': '"numbers" must be a bool',
  }),
  lower: joi.bool()
    .required()
    .messages({
      'any.empty': '"lower" is required',
      'bool.required': '"lower" must be a bool',
  }),
  simbols: joi.bool()
    .required()
    .messages({
      'any.empty': '"simbols" is required',
      'bool.required': '"simbols" must be a bool',
  }),
  upper: joi.bool()
    .required()
    .messages({
      'any.empty': '"upper" is required',
      'bool.required': '"upper" must be a bool',
  }),
});