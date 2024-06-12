import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({ children, titulo, mostrarHeader, estado, cambiarEstado }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    
    const cerrarModal = () => {
        cambiarEstado(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 10);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.overlay}>
                    <div className={styles.contenedorModal}>
                        {mostrarHeader &&
                            <div className={styles.encabezadoModal}>
                                <h3 className={styles.tituloEncabezado}>{titulo}</h3>
                            </div>
                        }
                        <div className={styles.contenedorChildren}>
                            {children}
                        </div>
                        <button className={styles.botonCerrar} onClick={cerrarModal}><CloseIcon /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
