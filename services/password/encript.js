const encriptSchema = require('../../schemas/encript');
const encript = require('../../models/password/encript')

module.exports = async (passwordObj) => {
  try {
    const { error } = encriptSchema.validate(passwordObj);

    if (error) {
      error.details[0].code = 400;
      return { error };
    }
    
    const passwordEntries = Object.entries(passwordObj);

    passwordEntries.forEach((entrie) => !entrie[1] ? delete passwordObj[entrie[0]] : null);

    return encript(passwordObj);
  } catch (error) {
    return { error };
  }
};