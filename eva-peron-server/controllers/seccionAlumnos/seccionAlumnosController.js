const db = require("../../database/models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../../modules/jwt");
const { verify } = require("jsonwebtoken");
const TOKEN_SECRET = require("../../config");
const Usuarios = db.Usuario;
const { validationResult } = require("express-validator");

const seccionAlumnosController = {
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
                { rol_id: 2, loginPage: "seccionAlumnos" },
                { rol_id: 5, loginPage: "seccionAlumnos" },
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
                const seccionAlumnosToken = await createAccessToken({
                    id: usuarioEncontrado.id,
                    rol: usuarioEncontrado.rol_id,
                });
                res.cookie("seccionAlumnosToken", seccionAlumnosToken);
                res.json({
                    ...usuarioEncontrado,
                    token: "seccionAlumnosToken",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },

    buscarAlumno: async (req, res) => {
        // get (trae al alumno por id)
    },

    crearAlumno: async (req, res) => {
        // post (crea un nuevo alumno)
    },

    modificarAlumno: async (req, res) => {
        // put (modifica un alumno existente)
    },

    eliminarAlumno: async (req, res) => {
        // delete (elimina un alumno)
    },

    cargarNota: async (req, res) => {
        // post (crea un nueva nota en el alumno)
    },

    modificarNota: async (req, res) => {
        // put (modifica una nota existente)
    },
};

module.exports = seccionAlumnosController;
