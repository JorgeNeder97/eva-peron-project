import React, { useState, useEffect } from 'react'
import ArrowLeft from '@mui/icons-material/ArrowBackIosRounded';
import ArrowRight from '@mui/icons-material/ArrowForwardIosRounded';
import styles from './Carrusel.module.css'
import { Link, NavLink } from 'react-router-dom';

export const Carrusel = () => {
    const images = ['carrusel/wall_1.png', 'carrusel/wall_2.png', 'carrusel/wall_3.png'];
    const titles = ['Propuesta Educativa', 'Nuestra Historia', 'Lema 2024'];
    const links = ['/', '/', '/'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [title, setTitle] = useState(titles[0]);
    const [link, setLink] = useState(links[0])
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
            setTitle(titles[nextIndex]);
            setLink(links[nextIndex]);
        }, 500);
    }


    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, images);
        }, 6000);
        return () => clearInterval(interval);
    }, [selectedImage]);

    return (
        <>
            <div className={styles.imageContainer}>
                <img
                    src={`/${selectedImage}`}
                    alt={selectedImage}
                    className={loaded ? styles.imageLoaded : styles.imageUnloaded}
                    onLoad={() => setLoaded(true)}
                />
                <div className={styles.titleContainer}><p className={styles.title}>{title}</p></div>
                <Link to={link} className={styles.navLink}>Leer más</Link>
                <div className={styles.filtro}></div>
                <button className={styles.buttonLeft} onClick={previous}><ArrowLeft fontSize="large" /></button>
                <button className={styles.buttonRight} onClick={next}><ArrowRight fontSize="large" /></button>
            </div>
        </>
    )
}
