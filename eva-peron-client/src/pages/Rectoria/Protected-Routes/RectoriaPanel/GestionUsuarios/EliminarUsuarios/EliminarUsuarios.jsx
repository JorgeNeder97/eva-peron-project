import React, { useEffect, useState } from 'react';
import styles from './EliminarUsuarios.module.css';
import { listRequest } from '../../../../../../api/usersCRUD';
import { NavBarRectoria } from '../../NavBarRectoria/NavBarRectoria';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { TablaEliminarUsuarios } from '../../../../../../components/TablaEliminarUsuarios/TablaEliminarUsuarios';



export const EliminarUsuarios = () => {

    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const listaUsuarios = async () => {
            const res = await listRequest();
            // usuarios es un array.
            setUsuarios(res.data.usuarios);
            setLoading(false);
            console.log(usuarios);
        }

        listaUsuarios();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    // Verificamos si esta cargando el estado de usuarios.
    if (loading) {
        return ( <div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div> );
    } else {
        // Esta funcion hace el filter para no repetir codigo.
        const filtrarUsuarios = (id) => {
            return usuarios.filter((usuario) => {
                return usuario.rol_id == id;
            });
        }

        // Filtramos los usuarios para cada tabla
        const usuariosRectoria = filtrarUsuarios(1);
        const usuariosSeccionAlumnos = filtrarUsuarios(2);
        const usuariosSecretaria = filtrarUsuarios(3);
        const usuariosAsesoriaPedagogica = filtrarUsuarios(5);

        return (
            <>
                <NavBarRectoria />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>USUARIOS</h2>
                        <VolverAtrasButton url="/rectoria/gestionUsuarios"/>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.gridContainer}>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Rectoría</h3>
                            <TablaEliminarUsuarios usuarios={usuariosRectoria} />
                        </div>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Sección Alumnos</h3>
                            <TablaEliminarUsuarios usuarios={usuariosSeccionAlumnos} />
                        </div>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Secretaría</h3>
                            <TablaEliminarUsuarios usuarios={usuariosSecretaria} />
                        </div>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Asesoría Pedagógica</h3>
                            <TablaEliminarUsuarios usuarios={usuariosAsesoriaPedagogica} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
