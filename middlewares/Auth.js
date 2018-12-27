const services = require('../services')

module.exports = {
  // Funcion que nos sirve para ver si nos envian el token de authenticacion y si el mismo es correcto.
  isAuth: async (req, res, next) => {    
    // Si dentro de el header no viene el campo authorization
    if (!req.headers.authorization) return res.status(403).send({ code: 403, message: 'No tienes autorizacion' })

    /**
      * En el caso de que tengamos el campo, vamos a tomar la segunda parte
      * Nuestro token seria algo como eso : 52safafsafassf1125f4sa5f4asfasfsafasf
      * En el nuesra cabecera tenemos un par key-value: authorization: Bearer 52safafsafassf1125f4sa5f4asfasfsafasf
      * Bearer + un espacio + nuestro_token, por eso tomamos la segunda parte del array que dividimos.
      *
      * Finalmente: 'authorization: Bearer nuestro_lindo_jwt'
      */

    // Tomamos nuesro token dividiendo por el espacio
    const token = req.headers.authorization.split(' ')[1]

    // Desciframos el token
    const payload = await services.decodeToken(token);

    if (!payload)  res.status(401).send({ message: 'Invalid Token!' })
  
    // Si todo salio bien le damos paso al siguiente middleware
    return next()

  }
}
