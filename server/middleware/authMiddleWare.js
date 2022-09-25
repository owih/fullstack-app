const jwt = require('jsonwebtoken');

module.exports = function middleWare(req, res, next) {
   if (req.method === 'OPTIONS') next();

   try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) return res.status(401).json({ message: 'Not authorized' });
      req.user = jwt.verify(token, process.env.SECRET_KEY); // decoded user info
      next();
   } catch (error) {
      res.status(401).json({ message: 'Not authorized' });
   }
}