const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const rectoriaLoginValidations = require('../middlewares/users/rectoriaLoginValidations');

router.post('/login', rectoriaLoginValidations, adminController.login);



module.exports = router;