import axios from './axios';


export const listarCargosCantidadesRequest = async () => {
    return await axios.get('/api/secretaria/cargos/listarCargosCantidades');
}

export const listarCargosRequest = async () => {
    return await axios.get('/api/secretaria/cargos/listarCargos');
}

export const crearCargoRequest = async (cargo) => {
    return await axios.post('/api/secretaria/cargos/crearCargo', cargo, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const cargoParaModificarRequest = async (id) => {
    return await axios.get(`/api/secretaria/cargos/cargoParaModificar/${id}`);
}

export const modificarCargoRequest = async (cargo, id) => {
    return await axios.patch(`/api/secretaria/cargos/modificarCargo/${id}`, cargo, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const eliminarCargoRequest = async (data) => {
    return await axios.delete(`/api/secretaria/cargos/eliminarCargo/${data.id}`);
}