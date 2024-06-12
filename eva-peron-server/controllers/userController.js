const db = require("../database/models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../modules/jwt");
const { verify } = require("jsonwebtoken");
const TOKEN_SECRET = require("../config");
const Usuarios = db.Usuario;

const userController = {
    // USERS CRUD:

    // Trae todos los usuarios
    list: async (req, res) => {
        try {
            // Traemos los usuarios de la base de datos.
            const response = await db.Usuario.findAll();

            // Los mapeamos para obtener un array con cada usuario de forma limpia.
            const usuarios = response.map((usuario) => {
                return usuario.dataValues;
            });

            // Los enviamos al cliente.
            res.json({ usuarios });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Registra un nuevo usuario
    register: async (req, res) => {
        // Desestructuramos en variables la información recibida en el req.body
        const {
            nombre,
            apellido,
            dni,
            contraseña,
            fecha_nacimiento,
            email,
            telefono,
            sexo_id,
            rol_id,
        } = req.body;

        try {
            // Hasheamos la contraseña.
            const passwordHashed = await bcrypt.hash(contraseña, 11);

            // Creamos un nuevo usuario para guardar en la base de datos con las variables que desestructuramos anteriormente y con la contraseña ya hasheada.
            const nuevoUsuario = {
                nombre,
                apellido,
                dni,
                contraseña: passwordHashed,
                fecha_nacimiento,
                email,
                telefono,
                sexo_id,
                rol_id,
            };

            // Se guarda el usuario en la base de datos...
            const usuarioGuardado = await Usuarios.create(nuevoUsuario);

            // Respondemos al cliente con el usuario ya creado para mostrar sus datos.
            res.json({
                ...usuarioGuardado,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Devuelve el usuario a modificar
    userToModify: async (req, res) => {
        try {
            const id = req.params.id;
            const peticion = await db.Usuario.findByPk(id);
            const usuario = peticion.dataValues;
            res.json({ usuario });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Modifica el usuario existente
    modify: async (req, res) => {
        try {
            const id = req.params.id;
            const { contraseña, ...otrosCampos } = req.body;

            // Verifica si la contraseña no está vacía
            if (contraseña && contraseña.trim() !== "") {
                // Hashea la nueva contraseña
                const contraseñaHasheada = await bcrypt.hash(contraseña, 11);

                // Actualiza el usuario con la nueva contraseña
                await db.Usuario.update(
                    {
                        ...otrosCampos,
                        contraseña: contraseñaHasheada,
                    },
                    {
                        where: { id },
                    }
                );
            } else {
                // Actualiza el usuario sin cambiar la contraseña
                await db.Usuario.update(
                    {
                        ...otrosCampos,
                    },
                    {
                        where: { id },
                    }
                );
            }
            res.json({ message: "Usuario Modificado" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;
        try {
            await db.Usuario.destroy({
                // IMPORTANTISIMO ESTE WHERE, NO TOCAR !!!!
                where: { id: id },
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // LOGIN & LOGOUT:

    // Inicia en sesión un usuario:
    login: async (req, res) => {
        const { usuario, contraseña, loginPage } = req.body;

        try {
            // Buscamos el usuario en la base de datos por su dni
            const usuarioData = await Usuarios.findOne({
                where: { dni: { [Op.like]: usuario } },
            });

            // Verificamos que exista
            if (!usuarioData) {
                return res.status(400).json({ message: "Credencial Invalida" });
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
                    .json({ message: "Credencial Invalida " });
            }

            // Aqui comprobamos el rol del usuario y desde que pagina esta intentando hacer el login
            const usuariosValidos = [
                { rol_id: 1, loginPage: "rectoria" },
                { rol_id: 2, loginPage: "seccionAlumnos" },
                { rol_id: 3, loginPage: "secretaria" },
                { rol_id: 4, loginPage: "secretaria" },
                { rol_id: 5, loginPage: "asesoriaPedagogica" },
                { rol_id: 6, loginPage: "seccionAlumnos" },
                { rol_id: 7, loginPage: "asesoriaPedagogica" },
            ];

            // Creamos una variable para verificar si el usuario es válido.
            const esValido = usuariosValidos.some((validacion) => {
                return (
                    validacion.rol_id == usuarioEncontrado.rol_id &&
                    validacion.loginPage == loginPage
                );
            });

            // Verificamos que el usuario sea válido.
            if (esValido) {
                switch (usuarioEncontrado.rol_id) {
                    case 1:
                        const rectoriaToken = await createAccessToken({
                            id: usuarioEncontrado.id,
                            rol: usuarioEncontrado.rol_id,
                        });
                        res.cookie("rectoriaToken", rectoriaToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "rectoriaToken",
                        });
                        break;
                    case 2:
                        const seccionAlumnosToken = await createAccessToken({
                            id: usuarioEncontrado.id,
                            rol: usuarioEncontrado.rol_id,
                        });
                        res.cookie("seccionAlumnosToken", seccionAlumnosToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "seccionAlumnosToken",
                        });
                        break;
                    case 3:
                        const secretariaToken = await createAccessToken({
                            id: usuarioEncontrado.id,
                            rol: usuarioEncontrado.rol_id,
                        });
                        res.cookie("secretariaToken", secretariaToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "secretariaToken",
                        });
                        break;
                    case 4:
                        const personalToken = await createAccessToken({
                            id: usuarioEncontrado.id,
                            rol: usuarioEncontrado.rol_id,
                        });
                        res.cookie("personalToken", personalToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "personalToken",
                        });
                        break;
                    case 5:
                        const asesoriaPedagogicaToken = await createAccessToken(
                            {
                                id: usuarioEncontrado.id,
                                rol: usuarioEncontrado.rol_id,
                            }
                        );
                        res.cookie(
                            "asesoriaPedagogicaToken",
                            asesoriaPedagogicaToken
                        );
                        res.json({
                            ...usuarioEncontrado,
                            token: "asesoriaPedagogicaToken",
                        });
                        break;
                    case 6:
                        const alumnoToken = await createAccessToken({
                            id: usuarioEncontrado.id,
                            rol: usuarioEncontrado.rol_id,
                        });
                        res.cookie("alumnoToken", alumnoToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "alumnoToken",
                        });
                        break;
                    case 7:
                        const docenteToken = await createAccessToken({
                            id: usuarioEncontrado.id,
                            rol: usuarioEncontrado.rol_id,
                        });
                        res.cookie("docenteToken", docenteToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "docenteToken",
                        });
                        break;
                    default:
                        res.status(401).json({ message: "Unauthorized user" });
                }
            } else {
                // Enviamos el error
                return res
                    .status(400)
                    .json({
                        message:
                            "Tu credencial NO tiene autorización en esta area",
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
        const {
            rectoriaToken,
            secretariaToken,
            seccionAlumnosToken,
            asesoriaPedagogicaToken,
        } = req.cookies;

        // Funcion que hace la verificación con JsonWebToken.
        function verifyTkn(token) {
            verify(token, TOKEN_SECRET, async (err, usuario) => {
                if (err)
                    return res
                        .status(401)
                        .json({ message: "Unauthorized: saltó el err" });

                const buscarUsuario = await Usuarios.findByPk(usuario.id);

                if (!buscarUsuario)
                    return res
                        .status(401)
                        .json({
                            message: "Unauthorized: no encontró el usuario",
                        });

                const usuarioEncontrado = buscarUsuario.dataValues;
                return res.json({
                    id: usuarioEncontrado.id,
                    nombre: usuarioEncontrado.nombre,
                    dni: usuarioEncontrado.dni,
                    rol_id: usuarioEncontrado.rol_id,
                    sexo_id: usuarioEncontrado.sexo_id,
                });
            });
        }

        // Dependiendo del token ejecutamos la función anterior.
        if (rectoriaToken) return verifyTkn(rectoriaToken);
        else if (secretariaToken) return verifyTkn(secretariaToken);
        else if (seccionAlumnosToken) return verifyTkn(seccionAlumnosToken);
        else if (asesoriaPedagogicaToken)
            return verifyTkn(asesoriaPedagogicaToken);
        else
            return res
                .status(401)
                .json({ message: "Unauthorized: no existe token" });
    },

    // Cierra la sesión del usuario
    logout: (req, res) => {
        // Vacía la cookie donde se encontraba el token y lo hace expirar.
        res.cookie("rectoriaToken", "", { expires: new Date(0) });
        res.cookie("secretariaToken", "", { expires: new Date(0) });
        res.cookie("seccionAlumnosToken", "", { expires: new Date(0) });
        res.cookie("asesoriaPedagogicaToken", "", { expires: new Date(0) });
        return res.sendStatus(200);
    },
};

module.exports = userController;
