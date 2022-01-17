const encript = require('../../services/password/encript');

module.exports = async (req, res, next) => {
  try {
    const { 
      numbers, lower, passwordLength, simbols, upper } = req.body;
    
    const verifyPassword = await encript({ numbers, lower, passwordLength, simbols, upper });

    if ('error' in verifyPassword) return next(verifyPassword.error);

    return res.status(200).json(verifyPassword);
  } catch (e) { 
    next(e);
  }
};