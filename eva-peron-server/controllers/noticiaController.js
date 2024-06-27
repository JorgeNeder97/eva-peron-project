const db = require("../database/models");
const { Op } = require("sequelize");

const noticiaController = {
    list: async (req, res) => {
        const noticias = await db.Noticia.findAll({
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
};

module.exports = noticiaController;
