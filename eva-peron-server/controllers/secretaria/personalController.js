const db = require('../../database/models');
const { Op } = require('sequelize');

 
const personalController = {
    listarDocentes: async (req, res) => {
        try {
            const response = await db.Docente.findAll({ 
                include: [{ association: 'docente_cargo'}],
            });
            const docentes = response.map(docente => {
                return docente.dataValue;
            });
            res.json({ docentes });
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    },

}


module.exports = personalController;