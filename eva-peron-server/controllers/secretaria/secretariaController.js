const db = require("../../database/models");
const sequelize = require("sequelize");
const Cargo = db.Cargo;
const Docente = db.Docente;
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../../modules/jwt");
const { verify } = require("jsonwebtoken");
const TOKEN_SECRET = require("../../config");
const Usuarios = db.Usuario;
const { validationResult } = require("express-validator");

const secretariaController = {
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
                { rol_id: 3, loginPage: "secretaria" },
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
                const secretariaToken = await createAccessToken({
                    id: usuarioEncontrado.id,
                    rol: usuarioEncontrado.rol_id,
                });
                res.cookie("secretariaToken", secretariaToken);
                res.json({
                    ...usuarioEncontrado,
                    token: "secretariaToken",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },

    listarCargosCantidades: async (req, res) => {
        try {
            const cargosConCantidadDocentes = await Cargo.findAll({
                attributes: [
                    "nombre",
                    [
                        sequelize.fn(
                            "COUNT",
                            sequelize.col("docente_cargo.id")
                        ),
                        "cantidadDocentes",
                    ],
                ],
                include: [
                    {
                        model: Docente,
                        as: "docente_cargo",
                        attributes: [],
                    },
                ],
                group: ["Cargo.id"],
            });
            const cargos = cargosConCantidadDocentes.map((cargo) => {
                return cargo.dataValues;
            });
            res.json({ cargos });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    listarCargos: async (req, res) => {
        try {
            const response = await db.Cargo.findAll();
            const cargos = response.map((cargo) => {
                return cargo.dataValues;
            });
            res.json({ cargos });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    crearCargo: async (req, res) => {
        try {
            const nuevoCargo = {
                nombre: req.body.nombre,
            };
            await db.Cargo.create(nuevoCargo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    cargoParaModificar: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await db.Cargo.findByPk(id);
            const cargo = response.dataValues;
            res.json({ cargo });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    modificarCargo: async (req, res) => {
        try {
            const id = req.params.id;
            const nombre = req.body.nombre;

            await db.Cargo.update({ nombre: nombre }, { where: { id } });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    eliminarCargo: async (req, res) => {
        const id = req.params.id;
        try {
            await db.Cargo.destroy({
                // IMPORTANTISIMO ESTE WHERE, NO TOCAR !!!!
                where: { id: id },
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    altaDocente: async (req, res) => {
        // post (crea un nuevo docente)
    },

    modificarDocente: async (req, res) => {
        // put (modifica los datos de un docente)
    },

    bajaDocente: async (req, res) => {
        // delete (elimina un docente)
    },

    plantaFuncional: async (req, res) => {
        // get  (trae toda la planta funcional al dia de la fecha)
    },
};

module.exports = secretariaController;
