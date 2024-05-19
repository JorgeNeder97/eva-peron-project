import React, { useEffect, useRef, useState } from 'react';
import styles from './InfoBar.module.css';
import { useSpring, animated } from 'react-spring';

export const InfoBar = () => {

    const contenedor = useRef();
    
    const [isVisible, setIsVisible] = useState(false);

    const triggerAnimation = (entries) => {
        const entry = entries[0];
        if(entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
        }
        return
    }
    
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
    }
    
    
    useEffect(() => {
        const observer = new IntersectionObserver(triggerAnimation, options);
        observer.observe(contenedor.current);
    }, [])

    const Number = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delaty: 75,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
    }

    return (
        <>
            <div ref={contenedor} className={isVisible ? styles.mainContainer : styles.mainInvisible}>
                <div className={styles.infoContainer}>
                    <div><Number n={75} /></div>
                    <h3>Años brindando servicio educativo</h3>
                </div>
                <div className={styles.infoContainer}>
                    <div><Number n={86} /></div>
                    <h3>Educadores</h3>
                </div>
                <div className={styles.infoContainer}>
                    <div><Number n={428} /></div>
                    <h3>Estudiantes</h3>
                </div>
            </div>
        </>
    )
}
