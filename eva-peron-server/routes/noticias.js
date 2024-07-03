const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');
const upload = require("../middlewares/multerMiddleware");

router.get('/list', noticiaController.list);

router.get('/lastestList', noticiaController.lastestList);

router.post('/crearNoticia', upload.single('nombre'), noticiaController.create);

router.get('/noticiaParaModificar/:id', noticiaController.noticiaParaModificar);

router.patch('/modify/:id', upload.single('nombre'), noticiaController.modify);

router.delete('/delete/:id', noticiaController.delete);

module.exports = router;