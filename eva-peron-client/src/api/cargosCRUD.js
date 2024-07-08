import axios from './axios';


export const listarCargosCantidadesRequest = async () => {
    return await axios.get('/secretaria/cargos/listarCargosCantidades');
}

export const listarCargosRequest = async () => {
    return await axios.get('/secretaria/cargos/listarCargos');
}

export const crearCargoRequest = async (cargo) => {
    return await axios.post('/secretaria/cargos/crearCargo', cargo, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const cargoParaModificarRequest = async (id) => {
    return await axios.get(`/secretaria/cargos/cargoParaModificar/${id}`);
}

export const modificarCargoRequest = async (cargo, id) => {
    return await axios.patch(`/secretaria/cargos/modificarCargo/${id}`, cargo, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const eliminarCargoRequest = async (data) => {
    return await axios.delete(`/secretaria/cargos/eliminarCargo/${data.id}`);
}