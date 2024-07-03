const db = require("../database/models");
const { Op } = require("sequelize");
const fs = require("fs");
const path = require("path");

const noticiaController = {
    list: async (req, res) => {
        const noticias = await db.Noticia.findAll({
            include: [{ association: "noticia_imagen" }],
            order: [["createdAt", "DESC"]],
        });

        res.json({
            meta: {
                status: 200,
                length: noticias.length,
                url: "/api/noticias/list",
            },
            data: noticias,
        });
    },

    listOne: async (req, res) => {
        try {
            const id = req.params.id;
            const peticion = await db.Noticia.findByPk(id, {
                include: [{ association: 'noticia_imagen' }],
            });
            const noticia = peticion.dataValues;
            res.json({ noticia });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    lastestList: async (req, res) => {
        const noticias = await db.Noticia.findAll({
            order: [["createdAt", "DESC"]],
            limit: 6,
            include: [{ association: "noticia_imagen" }],
        });

        res.json({
            meta: {
                status: 200,
                length: noticias.length,
                url: "/api/noticias/list",
            },
            data: noticias,
        });
    },

    create: async (req, res) => {
        const noticiaNueva = {
            titulo: req.body.titulo,
            adelanto: req.body.adelanto,
            cuerpo: req.body.cuerpo,
        };
        const imagenNueva = {
            nombre: req.file.filename,
        };

        try {
            await db.Noticia.create(noticiaNueva);
            await db.Imagen.create(imagenNueva);

            const noticia_db = await db.Noticia.findOne({
                where: { titulo: { [Op.like]: noticiaNueva.titulo } },
            });

            const imagen_db = await db.Imagen.findOne({
                where: { nombre: { [Op.like]: imagenNueva.nombre } },
            });

            await db.Noticia_Imagen.create({
                noticia_id: noticia_db.id,
                imagen_id: imagen_db.id,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    noticiaParaModificar: async (req, res) => {
        try {
            const id = req.params.id;
            const peticion = await db.Noticia.findByPk(id);
            const noticia = peticion.dataValues;
            res.json({ noticia });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    modify: async (req, res) => {
        try {
            const id = req.params.id;
            const { ...otrosCampos } = req.body;

            // Verifica si hay una nueva imagen o no
            if (req.file) {
                // Traigo la relacion de noticia/imagen para obtener el id de la imagen vieja luego
                const noticiaDB = await db.Noticia_Imagen.findOne({
                    where: { noticia_id: { [Op.like]: id } },
                });

                // Creo una constante con el id de la imagen vieja para traerla
                const imagenAnteriorId = noticiaDB.imagen_id;

                // Traigo la imagen vieja
                const imagenAnterior = await db.Imagen.findByPk(
                    imagenAnteriorId
                );

                // Obtengo el nombre de la imagen vieja para eliminarla (Podria fallar por dataValues)
                const nombreImagenAnterior = imagenAnterior.dataValues.nombre;

                // Obtengo la ruta absoluta de la imagen vieja
                const imagenAnteriorPath = path.join(
                    __dirname,
                    `../public/images/${nombreImagenAnterior}`
                );

                // Elimino la imagen vieja
                fs.unlinkSync(imagenAnteriorPath);

                // Update de la imagen
                await db.Imagen.update(
                    {
                        nombre: req.file.filename,
                    },
                    {
                        where: { id: imagenAnteriorId },
                    }
                );

                // Update de la noticia
                await db.Noticia.update(
                    {
                        ...otrosCampos,
                    },
                    {
                        where: { id },
                    }
                );
            } else {
                await db.Noticia.update(
                    {
                        ...otrosCampos,
                    },
                    {
                        where: { id },
                    }
                );
            }
            res.json({ message: "Noticia Modificada" });
        } catch (error) {
            res.status(500).json({ message: error.message });
            console.log(error);
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        try {
            const noticiaImagen = await db.Noticia_Imagen.findOne({
                where: { noticia_id: { [Op.like]: id } },
            });
            const imagenId = noticiaImagen.imagen_id;
            const imagenCompleta = await db.Imagen.findByPk(imagenId);
            const nombreImagen = imagenCompleta.dataValues.nombre;
            const imagenPath = path.join(
                __dirname,
                `../public/images/${nombreImagen}`
            );
            fs.unlinkSync(imagenPath);

            await db.Noticia.destroy({
                // IMPORTANTISIMO ESTE WHERE, NO TOCAR !!!!
                where: { id: id },
            });
            await db.Imagen.destroy({
                where: { id: imagenId },
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = noticiaController;
