const joi = require('joi');

module.exports = joi.object({
  passwordLength: joi.number()
  .required()
  .messages({
    'number.required': '"passwordLength" is required',
  }),
  numbers: joi.bool()
    .required()
    .messages({
      'number.required': '"numbers" is required',
  }),
  lower: joi.bool()
    .required()
    .messages({
      'bool.required': '"lower" is required',
  }),
  simbols: joi.bool()
    .required()
    .messages({
      'bool.required': '"simbols" is required',
  }),
  upper: joi.bool()
    .required()
    .messages({
      'bool.required': '"upper" is required',
  }),
});