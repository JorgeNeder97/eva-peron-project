const express = require('express');
const router = express.Router();
const secretariaController = require('../../controllers/secretaria/secretariaController');
const secretariaLoginValidations = require('../../middlewares/users/secretariaLoginValidations');



router.post('/login', secretariaLoginValidations, secretariaController.login);

router.get('/verify', secretariaController.verifyToken);

router.post('/logout', secretariaController.logout);

router.get('/cargos/listarCargosCantidades', secretariaController.listarCargosCantidades);

router.get('/cargos/listarCargos', secretariaController.listarCargos);

router.post('/cargos/crearCargo', secretariaController.crearCargo);

router.get('/cargos/cargoParaModificar/:id', secretariaController.cargoParaModificar);

router.patch('/cargos/modificarCargo/:id', secretariaController.modificarCargo);

router.delete('/cargos/eliminarCargo/:id', secretariaController.eliminarCargo);

router.get('/docentes/listarDocentes', secretariaController.listarDocentes);

router.get('/docentes/datosDocente/:id', secretariaController.datosDocente);

router.post('/docentes/altaDocente', secretariaController.altaDocente);

router.patch('/docentes/modificarDocente/:id', secretariaController.modificarDocente);

router.delete('/docentes/bajaDocente/:id', secretariaController.bajaDocente);

router.get('/cursos/listarCursos', secretariaController.listarCursos);

router.get('/docentes/verificarDni', secretariaController.verificarDni);

router.get('/docentes/verificarCuil', secretariaController.verificarCuil);

router.post('/docentes/solicitarLicencia', secretariaController.solicitarLicencia);

router.get('/docentes/datosLicencia/:id', secretariaController.datosLicencia);

router.get('/docentes/traerLicencias/:id', secretariaController.traerLicencias);




module.exports = router;