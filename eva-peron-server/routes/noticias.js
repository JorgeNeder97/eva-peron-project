const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.get('/list', noticiaController.list);

module.exports = router;