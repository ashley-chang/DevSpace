const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get json web token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if(!token) {
    return res.status(401).json({ msg: 'No token: authorization denied'});
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    // Token not valid
    console.log(err);
    res.status(401).json({ msg: 'Invalid token'});
  }
}
