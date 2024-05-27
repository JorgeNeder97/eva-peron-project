var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authRequired = require('../middlewares/users/authRequired');


// Iniciar sesión
router.post('/login', userController.login);

// Cerrar sesión
router.post('/logout', userController.logout);

// Verifica el token para mantener la sesión iniciada
router.get('/verify', userController.verifyToken);

// Registrar
router.post('/register', userController.register);
module.exports = router;
