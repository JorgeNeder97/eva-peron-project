import React from 'react';
import styles from './VolverAtrasButton.module.css';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const VolverAtrasButton = ({url}) => {

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Link to={url} className={styles.volverAtras} onClick={handleLinkClick}>
            <p className={styles.volverAtrasTexto}>Volver atrás</p>
            <ArrowBackIosIcon className={styles.volverAtrasIco} />
        </Link>
    )
}
