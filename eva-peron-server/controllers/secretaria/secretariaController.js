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
                where: { dni: usuario },
            });

            // Verificamos que exista
            if (!usuarioData) {
                // Verificamos si es docente
                const docenteData = await Docente.findOne({
                    where: { dni: usuario },
                });

                // Si es docente procedemos con la validación
                if (docenteData) {
                    const docenteEncontrado = docenteData.dataValues;

                    // Comparamos la contraseña
                    const contraseñaCorrecta = await bcrypt.compare(
                        contraseña,
                        docenteEncontrado.contraseña
                    );

                    if (!contraseñaCorrecta) {
                        return res
                            .status(400)
                            .json({
                                message: "Credencial Invalida contraseña",
                            });
                    }

                    const personalToken = await createAccessToken({
                        id: docenteEncontrado.id,
                        docente: true,
                        ...docenteEncontrado,
                    });
                    res.cookie("personalToken", personalToken);
                    res.json({
                        ...docenteEncontrado,
                        token: "personalToken",
                    });
                    return;
                }

                // Si no es docente devolvemos el error
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

    // Verifica si hay un token existente y lo autoriza.
    verifyToken: async (req, res) => {
        // Crea constantes de cada token para que al intentar verificar si son válidos no devuelva error por undefined.
        const { secretariaToken, personalToken } = req.cookies;

        // Funcion que hace la verificación con JsonWebToken.
        function verifyTkn(token) {
            verify(token, TOKEN_SECRET, async (err, usuario) => {
                if (err)
                    return res
                        .status(401)
                        .json({ message: "Unauthorized: saltó el err" });

                if (token === secretariaToken) {
                    const buscarUsuario = await Usuarios.findByPk(usuario.id);

                    if (!buscarUsuario) {
                    }

                    const usuarioEncontrado = buscarUsuario.dataValues;
                    return res.json({
                        id: usuarioEncontrado.id,
                        nombre: usuarioEncontrado.nombre,
                        dni: usuarioEncontrado.dni,
                        rol_id: usuarioEncontrado.rol_id,
                        sexo_id: usuarioEncontrado.sexo_id,
                    });
                } else if (token === personalToken) {
                    const buscarDocente = await db.Docente.findByPk(usuario.id);

                    if (buscarDocente) {
                        const docenteEncontrado = buscarDocente.dataValues;
                        console.log(docenteEncontrado);
                        return res.json({
                            id: docenteEncontrado.id,
                            nombre: docenteEncontrado.nombre,
                            dni: docenteEncontrado.dni,
                            sexo_id: docenteEncontrado.sexo_id,
                        });
                    }

                    return res.status(401).json({
                        message: "Unauthorized: no encontró el usuario",
                    });
                }
            });
        }

        // Dependiendo del token ejecutamos la función anterior.
        if (secretariaToken) return verifyTkn(secretariaToken);
        else if (personalToken) return verifyTkn(personalToken);
        else
            return res
                .status(401)
                .json({ message: "Unauthorized: no existe token" });
    },

    // Cierra la sesión del usuario
    logout: (req, res) => {
        res.cookie("secretariaToken", "", { expires: new Date(0) });
        res.cookie("personalToken", "", { expires: new Date(0) });
        return res.sendStatus(200);
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

    verificarDni: async (req, res) => {
        const { dni } = req.query;
        try {
            // Buscar en la base de datos si existe un usuario con el DNI proporcionado
            const docente = await db.Docente.findOne({ where: { dni } });

            // Devolver una respuesta con el formato esperado
            if (docente) {
                res.json({ exists: true });
            } else {
                res.json({ exists: false });
            }
        } catch (error) {
            console.error("Error verifying DNI:", error);
            res.status(500).json({ message: error.message });
        }
    },

    verificarCuil: async (req, res) => {
        const { cuil } = req.query;
        try {
            // Buscar en la base de datos si existe un usuario con el DNI proporcionado
            const docente = await db.Docente.findOne({ where: { cuil } });

            // Devolver una respuesta con el formato esperado
            if (docente) {
                res.json({ exists: true });
            } else {
                res.json({ exists: false });
            }
        } catch (error) {
            console.error("Error verifying CUIL:", error);
            res.status(500).json({ message: error.message });
        }
    },

    datosDocente: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await db.Docente.findByPk(id, {
                include: [
                    {
                        association: "asignatura_docente",
                        include: [{ association: "asignatura_curso" }],
                    },
                    { association: "cupof_docente" },
                    { association: "docente_cargo" },
                    { association: "licencia_docente" },
                    { association: "sexo_docente" },
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
                if (cupofIds[`cupof_id${i}`] == "") {
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
                    await db.Cupof.update(cupof, {
                        where: { id: { [Op.like]: cupofIds[`cupof_id${i}`] } },
                    });
                }
            }

            for (let i = 0; i < cantidadAsignaturas; i++) {
                // Si la asignatura_id es igual a "" significa que se esta agregando
                if (asignaturaIds[`asignatura_id${i}`] == "") {
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
                    await db.Asignatura.update(asignaturaNueva, {
                        where: {
                            id: {
                                [Op.like]: asignaturaIds[`asignatura_id${i}`],
                            },
                        },
                    });
                }
            }

            // Obtenemos las asignaturas y cupofs que tenga el docente en la base de datos
            const asignaturasDocente = await db.Asignatura.findAll({
                where: { docente_id: { [Op.like]: id } },
            });
            const cupofsDocente = await db.Cupof.findAll({
                where: { docente_id: { [Op.like]: id } },
            });

            // Extraemos en un array los id's de las asignaturas y los cupofs que tiene el docente en la base de datos
            const idsAsignatura = asignaturasDocente.map(
                (asignatura) => asignatura.id
            );
            const idsCupof = cupofsDocente.map((cupof) => cupof.id);

            // Extraemos en un array los id's de las asignaturas y los cupofs que se enviaron en el formulario
            const asignaturaIdsArray = Object.values(asignaturaIds);
            const cupofIdsArray = Object.values(cupofIds);

            // Aqui separamos los id's que tiene la base de datos pero no fueron enviados por el formulario, para que sean eliminados en caso de que la cantidad de id's que se envian sea menor a la cantidad de id's que existen en la base de datos
            const asignaturasToDelete = idsAsignatura.filter(
                (id) => !asignaturaIdsArray.includes(id)
            );
            const cupofsToDelete = idsCupof.filter(
                (id) => !cupofIdsArray.includes(id)
            );

            // Obtenemos la cantidad de asignaturas y cupofs que tiene el docente en la base de datos
            const cantidadAsignaturasDocente = asignaturasDocente.length;
            const cantidadCupofsDocente = cupofsDocente.length;

            // Verificamos que la cantidad de asignaturas enviadas sea menor que la cantidad de asignaturas que tenia en la base de datos
            if (cantidadAsignaturas < cantidadAsignaturasDocente) {
                for (let i = 0; i < asignaturasToDelete.length; i++) {
                    if (asignaturasToDelete[i] !== "") {
                        await db.Asignatura.destroy({
                            where: {
                                id: { [Op.like]: asignaturasToDelete[i] },
                            },
                        });
                    }
                }
            }

            // Verificamos que la cantidad de cupofs enviada sea menor que la cantidad de cupofs que tenia en la base de datos
            if (cantidadCupof < cantidadCupofsDocente) {
                for (let i = 0; i < cupofsToDelete.length; i++) {
                    if (cupofsToDelete[i] !== "") {
                        await db.Cupof.destroy({
                            where: { id: { [Op.like]: cupofsToDelete[i] } },
                        });
                    }
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },

    bajaDocente: async (req, res) => {
        // delete (elimina un docente)
        const id = req.params.id;
        try {
            await db.Docente.destroy({ where: { id: id } });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    listarDocentes: async (req, res) => {
        try {
            const docentes = await db.Docente.findAll({
                include: [
                    { association: "asignatura_docente" },
                    { association: "cupof_docente" },
                    { association: "docente_cargo" },
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

    solicitarLicencia: async (req, res) => {
        try {
            const nuevaLicencia = {
                licencia: req.body.licencia,
                fecha: req.body.fecha,
                docente_id: req.body.docente_id,
            };

            // Crear la nueva licencia en la base de datos y obtener el resultado
            const resultado = await db.Licencia.create(nuevaLicencia);

            // Obtener el ID de la licencia creada
            const licenciaId = resultado.id;

            res.json({
                status: 200,
                licenciaId,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    datosLicencia: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await db.Licencia.findByPk(id, {
                include: [
                    {
                        association: "licencia_docente",
                        include: [{ association: "docente_cargo" }],
                    },
                ],
            });
            const licencia = response.dataValues;
            res.json({ licencia });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    traerLicencias: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await db.Licencia.findAll({
                where: { docente_id: id },
            });
            const licencias = response.map((licencia) => {
                return licencia.dataValues;
            });
            res.json({ licencias });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    plantaFuncional: async (req, res) => {
        // get  (trae toda la planta funcional al dia de la fecha)
    },
};

module.exports = secretariaController;
