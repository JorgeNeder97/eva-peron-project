const express = require('express');
const router = express.Router();
const secretariaController = require('../../controllers/secretaria/secretariaController');
const secretariaLoginValidations = require('../../middlewares/users/secretariaLoginValidations');


router.post('/login', secretariaLoginValidations, secretariaController.login);

router.get('/cargos/listarCargosCantidades', secretariaController.listarCargosCantidades);

router.get('/cargos/listarCargos', secretariaController.listarCargos);

router.post('/cargos/crearCargo', secretariaController.crearCargo);

router.get('/cargos/cargoParaModificar/:id', secretariaController.cargoParaModificar);

router.patch('/cargos/modificarCargo/:id', secretariaController.modificarCargo);

router.delete('/cargos/eliminarCargo/:id', secretariaController.eliminarCargo);




module.exports = router;