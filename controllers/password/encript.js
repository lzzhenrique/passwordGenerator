const encript = require('../../services/password/encript');

module.exports = async (req, res, next) => {
  try {
    const verifyPassword = await encript({ ...req.body });

    if ('error' in verifyPassword) return next(verifyPassword.error);

    return res.status(200).json(verifyPassword);
  } catch (e) { 
    next(e);
  }
};