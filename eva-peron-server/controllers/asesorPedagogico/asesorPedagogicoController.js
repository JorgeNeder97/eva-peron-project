const db = require("../../database/models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../../modules/jwt");
const { verify } = require("jsonwebtoken");
const TOKEN_SECRET = require("../../config");
const Usuarios = db.Usuario;
const { validationResult } = require("express-validator");

const asesorPedagogicoController = {
    login: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        }

        const { usuario, contraseña, loginPage } = req.body;
        try {
            // Buscamos el usuario en la base de datos por su dni
            const usuarioData = await Usuarios.findOne({
                where: { dni: { [Op.like]: usuario } },
            });

            // Verificamos que exista
            if (!usuarioData) {
                return res
                    .status(400)
                    .json({ message: "Credencial Invalida usuario" });
            }

            // Accedemos a dataValues que es donde realmente esta el objeto del usuario
            const usuarioEncontrado = usuarioData.dataValues;

            // Comparamos la contraseña
            const esCorrecta = await bcrypt.compare(
                contraseña,
                usuarioEncontrado.contraseña
            );

            // Definimos el flujo de la respuesta
            if (!esCorrecta) {
                return res
                    .status(400)
                    .json({ message: "Credencial Invalida contraseña" });
            }

            // Aqui comprobamos el rol del usuario y desde que pagina esta intentando hacer el login
            const usuariosValidos = [
                { rol_id: 4, loginPage: "asesoriaPedagogica" },
            ];

            // Creamos una variable para verificar si el usuario es válido.
            const esValido = usuariosValidos.some((validacion) => {
                return (
                    validacion.rol_id == usuarioEncontrado.rol_id &&
                    validacion.loginPage == loginPage
                );
            });

            // Verificamos que el usuario sea válido.
            if (!esValido) {
                // Enviamos el error
                return res.json({
                    message: "Usuario invalido",
                });
            } else if (esValido) {
                const asesoriaPedagogicaToken = await createAccessToken({
                    id: usuarioEncontrado.id,
                    rol: usuarioEncontrado.rol_id,
                });
                res.cookie("asesoriaPedagogicaToken", asesoriaPedagogicaToken);
                res.json({
                    ...usuarioEncontrado,
                    token: "asesoriaPedagogicaToken",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = asesorPedagogicoController;
