const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');
const { Op } = require('sequelize');


const secretariaLoginValidations = [
    body("usuario")
        .notEmpty().withMessage('Ingresa un usuario para iniciar sesión').bail()
        .custom(async (value, { req }) => {
            const usuarioEncontrado = await db.Usuario.findOne({
                where: {
                    dni: req.body.usuario,
                    rol_id: 3,
                }
            });
            if(!usuarioEncontrado) throw new Error("El usuario ingresado no existe");
            return true
        }),
    body("contraseña")
        .notEmpty().withMessage('Ingresa una contraseña para iniciar sesión').bail()
        .custom(async (value, { req }) => {
            const usuarioEncontrado = await db.Usuario.findOne({
                where: {
                    dni: req.body.usuario,
                }
            });
            if(usuarioEncontrado) {
                const contraseña = usuarioEncontrado.contraseña;
                let validarContraseña = bcrypt.compareSync(req.body.contraseña, contraseña);
                if(!validarContraseña) throw new Error("La contraseña ingresada es incorrecta");
                return true;
            }
        }),
]


module.exports = secretariaLoginValidations;