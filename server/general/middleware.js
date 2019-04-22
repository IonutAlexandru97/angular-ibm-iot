import jwt from 'jsonwebtoken';
const config = require('../database/config');
const { secret } = require('../database/secret.json');

const Auth = {

    async verifyToken(req, res, next) {
      const token = req.headers.authorization.split(" ")[1];
      if(!token) {
        return res.status(400).send({ 'message': 'Token is not provided' });
      }
      try {
        const decoded = await jwt.verify(token, secret);
        const text = 'SELECT * FROM users WHERE id = $1';
        const { rows } = await config.pool.query(text, [decoded.userId]);
        if(!rows[0]) {
          return res.status(400).send({ 'message': 'The token you provided is invalid' });
        }
        req.user = { id: decoded.userId };
        next();
      } catch(error) {
        return res.status(400).send(error);
      }
    }
  }

  export default Auth;