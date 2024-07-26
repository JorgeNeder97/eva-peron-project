const express = require('express');
const router = express.Router();
const seccionAlumnosController = require('../../controllers/seccionAlumnos/seccionAlumnosController');
const seccionAlumnosLoginValidations = require('../../middlewares/users/seccionAlumnosLoginValidations');



router.post('/login',seccionAlumnosLoginValidations, seccionAlumnosController.login);

router.post('/logout', seccionAlumnosController.logout);



module.exports = router;