const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');
const upload = require("../middlewares/multerMiddleware");

router.get('/list', noticiaController.list);

router.post('/crearNoticia', upload.single('nombre'), noticiaController.create);

module.exports = router;