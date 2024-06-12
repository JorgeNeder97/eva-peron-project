var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authRequired = require('../middlewares/users/authRequired');
const loginValidations = require('../middlewares/users/loginValidations');


// Iniciar sesión
router.post('/login', loginValidations, userController.login);

// Cerrar sesión
router.post('/logout', userController.logout);

// Verifica el token para mantener la sesión iniciada
router.get('/verify', userController.verifyToken);

// Registrar un usuario
router.post('/register', userController.register);

// Listar los usuarios
router.get('/list', userController.list);

// Mostrar el usuario a modificar
router.get('/userToModify/:id', userController.userToModify);

// Modificar un usuario
router.patch('/modify/:id', userController.modify);

// Eliminar un usuario
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;


