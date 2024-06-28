const db = require("../database/models");
const { Op } = require("sequelize");

const noticiaController = {
    list: async (req, res) => {
        const noticias = await db.Noticia.findAll({
            include: [{ association: "noticia_imagen" }],
            order: [
                ['createdAt', 'DESC'],
            ]
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

    lastestList: async (req, res) => {
        const noticias = await db.Noticia.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
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
        console.log(req.file);
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
            console.log('CREADA');
        } catch (error) {
            console.log('ERROR !!!');
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
            const {nombre, ...otrosCampos } = req.body;

            // Verifica si hay una nueva imagen o no
            if (!nombre) {
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
                        nombre: req.file.filename,
                    },
                    {
                        where: { id },
                    }
                );
            }
            res.json({ message: "Noticia Modificada" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
};

module.exports = noticiaController;
