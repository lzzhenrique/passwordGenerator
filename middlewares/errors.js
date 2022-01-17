module.exports = async (err, _req, res, _next) => {
  console.log(err);
  
  if (err.isJoi) {
    return res.status(err.details[0].status).json({ message: err.details[0].message });
  }
  if ('code' in err) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });  
};