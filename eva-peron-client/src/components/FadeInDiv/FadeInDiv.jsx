import React, { useEffect, useState } from 'react';
import styles from './FadeInDiv.module.css';

export const FadeInDiv = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`${styles.fadeIn} ${isVisible ? styles.show : ''}`}>
            {children}
        </div>
    );
};

