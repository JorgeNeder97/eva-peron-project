import axios from "./axios";

export const verificarDniRequest = async (dni) => {
    try {
        const response = await axios.get("/api/secretaria/docentes/verificarDni", {
            params: { dni },
        });
        return response.data.exists; // Suponiendo que el API devuelve un objeto { exists: true/false }
    } catch (error) {
        console.error("Error verifying DNI:", error);
        return false;
    }
};

export const verificarCuilRequest = async (cuil) => {
    try {
        const response = await axios.get("/api/secretaria/docentes/verificarCuil", {
            params: { cuil },
        });
        return response.data.exists;
    } catch (error) {
        console.error("Error verifying CUIL:", error);
        return false;
    }
};

export const listarDocentesRequest = async () => {
    return await axios.get("/api/secretaria/docentes/listarDocentes");
};

// Este request se usa en el formulario de alta de docentes
export const listarCursosRequest = async () => {
    return await axios.get("/api/secretaria/cursos/listarCursos");
};

export const altaDocenteRequest = async (docente) => {
    return await axios.post("/api/secretaria/docentes/altaDocente", docente, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const datosDocenteRequest = async (id) => {
    return await axios.get(`/api/secretaria/docentes/datosDocente/${id}`);
};

export const modificarDocenteRequest = async (docente, id) => {
    return await axios.patch(
        `/api/secretaria/docentes/modificarDocente/${id}`,
        docente,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

export const eliminarDocenteRequest = async (data) => {
    return await axios.delete(`/api/secretaria/docentes/bajaDocente/${data.id}`);
};

export const solicitarLicenciaRequest = async (data) => {
    return await axios.post('/api/secretaria/docentes/solicitarLicencia', data, {
        headers: {
            "Content-Type": "application/json",
        }
    });
};

export const datosLicenciaRequest = async (id) => {
    return await axios.get(`/api/secretaria/docentes/datosLicencia/${id}`);
};

export const traerLicenciasRequest = async (id) => {
    return await axios.get(`/api/secretaria/docentes/traerLicencias/${id}`);
}

export const listarLicenciasRequest = async () => {
    return await axios.get('/api/secretaria/docentes/listarLicencias');
}