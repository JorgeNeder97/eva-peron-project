const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

/* GET home page. */
router.post('/login', userController.log);

module.exports = router;
