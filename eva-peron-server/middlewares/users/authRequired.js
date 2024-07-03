// Validación del token
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../../config');

function authRequired (req, res, next) {
    const {token} = req.cookies;
    if(!token) return res.status(401).json({ message: 'No token, authorization denied'});

    jwt.verify(token, TOKEN_SECRET, (err, usuario) => {
        if(err) return res.status(403).json({ message: 'Invalid Token' });

        req.usuarioLogueado = usuario;

        next();
    });
}

module.exports = authRequired;