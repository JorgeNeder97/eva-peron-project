const db = require('../database/models');
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const createAccessToken = require('../modules/jwt');
const { verify } = require('jsonwebtoken');
const TOKEN_SECRET = require('../config');
const Usuarios = db.Usuario;


const userController = {
    register: async (req, res) => {
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
            const passwordHashed = await bcrypt.hash(contraseña, 11);

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

            // Se crea el usuario en la base de datos...
            const usuarioGuardado = await Usuarios.create(nuevoUsuario);

            
            const token = await createAccessToken({ id: usuarioGuardado.id });
            res.cookie("token", token);
            res.json({
                ...usuarioGuardado,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

        console.log(nombre, apellido, dni, contraseña, sexo_id, rol_id);
    },

    login: async (req, res) => {
        const { usuario, contraseña, loginPage } = req.body;
        
        try {
            // Buscamos el usuario en la base de datos por su dni
            const usuarioData = await Usuarios.findOne({ where: {dni: {[Op.like]: usuario}} });
            
            // Verificamos que exista
            if (!usuarioData) {
                return res.status(400).json({ message: "Credencial Invalida" });
            }

            // Accedemos a dataValues que es donde realmente esta el objeto del usuario
            const usuarioEncontrado = usuarioData.dataValues;

            // Comparamos la contraseña
            const esCorrecta = await bcrypt.compare(contraseña, usuarioEncontrado.contraseña);
            
            // Definimos el flujo de la respuesta
            if (!esCorrecta) {
                return res.status(400).json({ message: "Credencial Invalida " });
            }

            // Aqui comprobamos el rol del usuario y desde que pagina esta intentando hacer el login
            const usuariosValidos = [
                {rol_id: 1, loginPage: "rectoria"},
                {rol_id: 2, loginPage: "seccionAlumnos"},
                {rol_id: 3, loginPage: "secretaria"},
                {rol_id: 4, loginPage: "secretaria"},
                {rol_id: 5, loginPage: "asesoriaPedagogica"},
                {rol_id: 6, loginPage: "seccionAlumnos"},
                {rol_id: 7, loginPage: "asesoriaPedagogica"},
            ];

            const esValido = usuariosValidos.some(validacion => {
                return validacion.rol_id == usuarioEncontrado.rol_id && validacion.loginPage == loginPage;
            });


            if(esValido) {
                switch(usuarioEncontrado.rol_id) {
                    case 1:
                        const rectoriaToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("rectoriaToken", rectoriaToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "rectoriaToken"
                        });
                        break;
                    case 2:
                        const seccionAlumnosToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("seccionAlumnosToken", seccionAlumnosToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "seccionAlumnosToken"
                        });
                        break;
                    case 3:
                        const secretariaToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("secretariaToken", secretariaToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "secretariaToken"
                        });
                        break;
                    case 4:
                        const personalToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("personalToken", personalToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "personalToken"
                        });
                        break;
                    case 5:
                        const asesoriaPedagogicaToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("asesoriaPedagogicaToken", asesoriaPedagogicaToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "asesoriaPedagogicaToken"
                        });
                        break;
                    case 6:
                        const alumnoToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("alumnoToken", alumnoToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "alumnoToken"
                        });
                        break;
                    case 7:
                        const docenteToken = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
                        res.cookie("docenteToken", docenteToken);
                        res.json({
                            ...usuarioEncontrado,
                            token: "docenteToken"
                        });
                        break;
                    default: 
                        res.status(401).json({ message: 'Unauthorized user' });
                }
                // res.json({
                //     ...usuarioEncontrado,
                // });

            } else {

                // Enviamos el error
                return res.status(400).json({ message: "Tu credencial NO tiene autorización en esta area"});
            
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    },

    verifyToken: async (req, res) => {
        const { rectoriaToken, secretariaToken, alumnosToken, asesoriaPedagogicaToken } = req.cookies;
        console.log(alumnosToken, 'Este es');
        function verifyTkn(token) {
            verify(token, TOKEN_SECRET, async (err, usuario) => {
                if(err) return res.status(401).json({ message: 'Unauthorized: saltó el err' });
                
                const buscarUsuario = await Usuarios.findByPk(usuario.id);
                
                if(!buscarUsuario) return res.status(401).json({ message: 'Unauthorized: no encontró el usuario' });
                
                const usuarioEncontrado = buscarUsuario.dataValues;
                return res.json({
                    id: usuarioEncontrado.id,
                    nombre: usuarioEncontrado.nombre,
                    dni: usuarioEncontrado.dni,
                    rol_id: usuarioEncontrado.rol_id
                });
            })
        }

        if(rectoriaToken) return verifyTkn(rectoriaToken);
        else if(secretariaToken) return verifyTkn(secretariaToken);
        else if(alumnosToken) return verifyTkn(alumnosToken);
        else if(asesoriaPedagogicaToken) return verifyTkn(asesoriaPedagogicaToken);
        else return res.status(401).json({ message: 'Unauthorized: no existe token'});
    },
    
    logout: (req, res) => {
        res.cookie('token', "", { expires: new Date(0) });
        return res.sendStatus(200);
    },

};

module.exports = userController;
