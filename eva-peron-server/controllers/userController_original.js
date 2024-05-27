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

                // Creamos el token
                const token = await createAccessToken({ id: usuarioEncontrado.id, rol: usuarioEncontrado.rol_id });
    
                // Enviamos el token en una cookie y el usuario en la respuesta
                res.cookie("token", token);
                res.json({
                    ...usuarioEncontrado,
                });

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
        const { token } = req.cookies;

        if(!token) return res.status(401).json({ message: 'Unauthorized' });

        verify(token, TOKEN_SECRET, async (err, usuario) => {
            if(err) return res.status(401).json({ message: 'Unauthorized' });

            const buscarUsuario = await Usuarios.findByPk(usuario.id);
            if(!buscarUsuario) return res.status(401).json({ message: 'Unauthorized' });
            const usuarioEncontrado = buscarUsuario.dataValues;

            return res.json({
                ...usuarioEncontrado
            });
        })
    },
    
    logout: (req, res) => {
        res.cookie('token', "", { expires: new Date(0) });
        return res.sendStatus(200);
    },

};

module.exports = userController;
