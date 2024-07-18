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
            const usuariosValidos = [{ rol_id: 3, loginPage: "secretaria" }];

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
        // post (crea un nuevo docente, crea los cupof y las asignaturas)
        const cantidadCupof = req.body.cantidadCupof;
        const cantidadAsignaturas = req.body.cantidadAsignaturas;
        const { cuil } = req.body;

        const passwordHashed = await bcrypt.hash(req.body.contraseña, 11);

        try {
            await db.Docente.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                cuil: cuil,
                dni: req.body.dni,
                contraseña: passwordHashed,
                edad: req.body.edad,
                sexo_id: req.body.sexo_id,
                email: req.body.email,
                domicilio: req.body.domicilio,
                titulo: req.body.titulo,
                fecha_prom_inc_doce: req.body.fecha_prom_inc_doce,
                cargo_id: req.body.cargo_id,
                situacion_revista: req.body.situacion_revista,
                fecha_inc_cargo_actual: req.body.fecha_inc_cargo_actual,
                alta_expte: req.body.alta_expte,
                observaciones: req.body.observaciones,
            });

            const docente = await db.Docente.findOne({
                where: { dni: req.body.dni },
            });

            for (let i = 0; i < parseInt(cantidadCupof); i++) {
                let cupof = {
                    nombre: req.body[`cupof${i}`],
                    situacion_revista: req.body[`cupof_situacion_revista${i}`],
                    docente_id: docente.id,
                };
                await db.Cupof.create(cupof);
            }

            for (let i = 0; i < parseInt(cantidadAsignaturas); i++) {
                let asignaturaNueva = {
                    asignatura: req.body[`nombre_asignatura${i}`],
                    curso_id: req.body[`curso_asignatura${i}`],
                    horas: req.body[`horas_asignatura${i}`],
                    docente_id: docente.id,
                };
                await db.Asignatura.create(asignaturaNueva);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },

    docenteParaModificar: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await db.Docente.findByPk(id, {
                include: [
                    { association: "asignatura_docente" },
                    { association: "cupof_docente" },
                ],
            });
            const docente = response.dataValues;
            res.json({ docente });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    modificarDocente: async (req, res) => {
        // patch (modifica los datos de un docente)
        const id = req.params.id;
        const { contraseña } = req.body;
        const cantidadCupof = parseInt(req.body.cantidadCupof);
        const cantidadAsignaturas = parseInt(req.body.cantidadAsignaturas);
        const { cuil } = req.body;

        // Crear un objeto para almacenar las asignaturas_id dinámicas
        const asignaturaIds = {};

        for (let i = 0; i < cantidadAsignaturas; i++) {
            // Construir el nombre de la propiedad
            const key = `asignatura_id${i}`;
            // Asignar el valor correspondiente a la propiedad en el objeto asignaturaIds
            asignaturaIds[key] = req.body[key];
        }

        // Crear un objeto para almacenar los cupof_id dinámicos
        const cupofIds = {};

        for (let i = 0; i < cantidadCupof; i++) {
            // Construir el nombre de la propiedad
            const key = `cupof_id${i}`;
            // Asignar el valor correspondiente a la propiedad en el objeto cupofIds
            cupofIds[key] = req.body[key];
        }

        const docenteModificado = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cuil: cuil,
            dni: req.body.dni,
            edad: req.body.edad,
            sexo_id: req.body.sexo_id,
            email: req.body.email,
            domicilio: req.body.domicilio,
            titulo: req.body.titulo,
            fecha_prom_inc_doce: req.body.fecha_prom_inc_doce,
            cargo_id: req.body.cargo_id,
            situacion_revista: req.body.situacion_revista,
            fecha_inc_cargo_actual: req.body.fecha_inc_cargo_actual,
            alta_expte: req.body.alta_expte,
            observaciones: req.body.observaciones,
        };

        try {
            if (contraseña && contraseña.trim() !== "") {
                const passwordHashed = await bcrypt.hash(
                    req.body.contraseña,
                    11
                );
                await db.Docente.update(
                    {
                        ...docenteModificado,
                        contraseña: passwordHashed,
                    },
                    {
                        where: { id: id },
                    }
                );
            } else {
                await db.Docente.update(docenteModificado, {
                    where: { id: id },
                });
            }

            for (let i = 0; i < cantidadCupof; i++) {
                // Si el cupof_id es igual a "" significa que se esta agregando
                if(cupofIds[`cupof_id${i}`] == "") {
                    let cupof = {
                        nombre: req.body[`cupof${i}`],
                        situacion_revista:
                            req.body[`cupof_situacion_revista${i}`],
                        docente_id: id,
                    };
                    await db.Cupof.create(cupof);
                } else {
                    let cupof = {
                        nombre: req.body[`cupof${i}`],
                        situacion_revista:
                            req.body[`cupof_situacion_revista${i}`],
                        docente_id: id,
                    };
                    await db.Cupof.update(cupof, { where: { id: { [Op.like]: cupofIds[`cupof_id${i}`] } } });
                }
            }

            for (let i = 0; i < cantidadAsignaturas; i++) {
                // Si la asignatura_id es igual a "" significa que se esta agregando
                if(asignaturaIds[`asignatura_id${i}`] == "") {
                    let asignaturaNueva = {
                        asignatura: req.body[`nombre_asignatura${i}`],
                        curso_id: req.body[`curso_asignatura${i}`],
                        horas: req.body[`horas_asignatura${i}`],
                        docente_id: id,
                    };
                    await db.Asignatura.create(asignaturaNueva);
                } else {
                    let asignaturaNueva = {
                        asignatura: req.body[`nombre_asignatura${i}`],
                        curso_id: req.body[`curso_asignatura${i}`],
                        horas: req.body[`horas_asignatura${i}`],
                        docente_id: id,
                    };
                    await db.Asignatura.update(asignaturaNueva, { where: { id: { [Op.like]: asignaturaIds[`asignatura_id${i}`] } } });
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },

    bajaDocente: async (req, res) => {
        // delete (elimina un docente)
    },

    listarDocentes: async (req, res) => {
        try {
            const docentes = await db.Docente.findAll({
                include: [
                    { association: "asignatura_docente" },
                    { association: "cupof_docente" },
                    { association: "docente_cargo"},
                ],
            });
            res.json({
                meta: {
                    status: 200,
                    length: docentes.length,
                    url: "/api/secretaria/gestionDocentes/modificarDocente",
                },
                data: docentes,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    listarCursos: async (req, res) => {
        try {
            const response = await db.Curso.findAll({
                where: { año: { [Op.like]: 2024 } },
            });
            const cursos = response.map((curso) => {
                return curso.dataValues;
            });
            res.json({ cursos });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    plantaFuncional: async (req, res) => {
        // get  (trae toda la planta funcional al dia de la fecha)
    },
};

module.exports = secretariaController;
