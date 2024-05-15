const db = require("../database/models");

const noticiaController = {
    list: (req, res) => {
        db.Noticia.findAll({
            include: [
                {association: 'noticia_imagen'}
            ]
        })
        .then((noticias) =>
            res.json({
                meta: {
                    status: 200,
                    length: noticias.length,
                    url: "/api/noticias/list",
                },
                data: noticias,
            })
        ).catch(err => console.log(err));
    },
};

module.exports = noticiaController;
