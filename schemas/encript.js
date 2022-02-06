const joi = require('joi');

module.exports = joi.object({
  passwordLength: joi.number()
  .min(6)
  .max(15)
  .required()
  .messages({
    'any.empty': '"passwordLength" is required',
    'number.min': '"passwordLength" must be a number equal or greater than 6',
    'number.max': '"passwordLength" must be a numberequal or less than 15',
    'number.required': '"passwordLength" must be a number',
  }),
  numbers: joi.bool()
    .required()
    .messages({
      'any.empty': '"numbers" is required',
      'bool.required': '"numbers" must be a bool',
  }),
  lowerCase: joi.bool()
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
  upperCase: joi.bool()
    .required()
    .messages({
      'any.empty': '"upper" is required',
      'bool.required': '"upper" must be a bool',
  }),
});