import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { Institucional } from './pages/Institucional/Institucional';
import { SecretariaPage } from './pages/Secretaria/SecretariaPage';
import { SeccionAlumnosPage } from './pages/SeccionAlumnos/SeccionAlumnosPage';
import { AsesoriaPedagogicaPage } from './pages/AsesoriaPedagogica/AsesoriaPedagogicaPage';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { useSlowLoad } from './hooks/useSlowLoad';
import styles from './styles/MainApp.module.css';

export const MainApp = () => {

    const { isLoaded } = useSlowLoad();

    return (
        <div className={isLoaded ? styles.loaded : styles.unloaded}>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institucional" element={<Institucional />} />
                <Route path="/secretaria" element={<SecretariaPage />} />
                <Route path="/alumnos" element={<SeccionAlumnosPage />} />
                <Route path="/asesoria-pedagogica" element={<AsesoriaPedagogicaPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    )
}
