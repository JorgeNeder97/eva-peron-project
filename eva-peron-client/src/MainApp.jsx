import React from 'react';
import styles from './styles/MainApp.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { Institucional } from './pages/Institucional/Institucional';
import { Noticias } from './pages/Noticias/Noticias';
import { SecretariaPage } from './pages/Secretaria/SecretariaPage';
import { SeccionAlumnosPage } from './pages/SeccionAlumnos/SeccionAlumnosPage';
import { AsesoriaPedagogicaPage } from './pages/AsesoriaPedagogica/AsesoriaPedagogicaPage';
import { SecretariaPanel } from './pages/Secretaria/SecretariaPanel/SecretariaPanel';
import { Footer } from './components/Footer/Footer';
import { useSlowLoad } from './hooks/useSlowLoad';
import 'normalize.css/normalize.css';

export const MainApp = () => {

    const { isLoaded } = useSlowLoad();

    return (
        <div className={isLoaded ? styles.loaded : styles.unloaded}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institucional" element={<Institucional />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/secretaria" element={<SecretariaPage />} />
                <Route path="/alumnos" element={<SeccionAlumnosPage />} />
                <Route path="/asesoria-pedagogica" element={<AsesoriaPedagogicaPage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/secretaria/home" element={<SecretariaPanel />} />
            </Routes>
            <Footer />
        </div>
    )
}
