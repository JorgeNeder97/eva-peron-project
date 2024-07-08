const express = require('express');
const router = express.Router();
const asesorPedagogicoController = require('../../controllers/asesorPedagogico/asesorPedagogicoController');
const asesoriaPedagogicaLoginValidations = require('../../middlewares/users/asesoriaPedagogicaLoginValidations');


router.post('/login', asesoriaPedagogicaLoginValidations, asesorPedagogicoController.login);






module.exports = router;