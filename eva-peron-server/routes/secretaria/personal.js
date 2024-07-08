const express = require('express');
const router = express.Router();
const personalController = require('../../controllers/secretaria/personalController');

router.get('/listarDocentes', personalController.listarDocentes);





module.exports = router;