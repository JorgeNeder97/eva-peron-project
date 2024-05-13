import React from 'react';
import styles from './Noticias.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Noticia } from '../../components/News/Noticia';
import { useSlowLoad } from '../../hooks/useSlowLoad';

export const Noticias = () => {

    const { isLoaded } = useSlowLoad();

    return (
        <>
            <NavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <Noticia />
            </div>
        </>
    )
}
