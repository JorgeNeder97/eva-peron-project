
const secretariaController = {
    altaDocente: async (req, res) => {
        // post (agrega un docente)
    },

    modificarDocente: async (req, res) => {
        // put (modifica los datos de un docente)
    },

    bajaDocente: async (req, res) => {
        // delete (elimina un docente)
    },

    plantaFuncional: async (req, res) => {
        // get  (trae toda la planta funcional al dia de la fecha)
    },

    listarCargos: async (req, res) => {
        // get (trae la lista de cargos ocupados y disponibles)
    },

    asignarCargo: async (req, res) => {
        // put (es put porque el cargo estará creado, vacio o con alguien lo unico que hara al asignar es modificarlo)
    }
}


module.exports = secretariaController;