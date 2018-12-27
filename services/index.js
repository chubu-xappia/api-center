const jwt = require('jwt-simple');
const moment = require('moment');
const bcrypt = require('bcrypt');

module.exports = {
  // Create a Json Web Token
  createToken: async (keyword) => {
    const payload = {
      sub: keyword,
      iat: moment().unix(), // fecha creacion del token
      exp: moment().add(30, 'days').unix() // caducidad del token
    }

    return await jwt.encode(payload, process.env.SECRET_TOKEN);
  },

 // Decode a Json Web Token
  decodeToken: async (token) => {
    try {
      const payload = await jwt.decode(token, process.env.SECRET_TOKEN); 
      if (payload.exp <= moment().unix()) return false;   
    } catch (err) {
      return false;
    }
    return true;
  },

  // Hash a password
  hashPassword: async (password) => {
    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      return hash
    } catch (err) {
      res.status(500).send({
        code: 500,
				message: `Error al hashear la contraseña: ${err}`
			})
    }
  },

  // Compare Hash with password
  checkHash: async (password, hash) => {
    try {
      const isEqual = bcrypt.compare(password, hash)
      return isEqual
    } catch (err) {
      console.log(err)
    }

  }

}
