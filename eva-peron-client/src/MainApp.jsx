import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { HomePage } from './pages/Home/HomePage'
import { SecretariaPage } from './pages/Secretaria/SecretariaPage'
import { useSlowLoad } from './hooks/useSlowLoad'
import styles from './styles/MainApp.module.css'
import { SeccionAlumnosPage } from './pages/SeccionAlumnos/SeccionAlumnosPage'
import { AsesoriaPedagogicaPage } from './pages/AsesoriaPedagogica/AsesoriaPedagogicaPage'

export const MainApp = () => {

    const { isLoaded } = useSlowLoad();

    return (
        <div className={isLoaded ? styles.loaded : styles.unloaded}>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/secretaria" element={<SecretariaPage />} />
                <Route path="/alumnos" element={<SeccionAlumnosPage />} />
                <Route path="/asesoria-pedagogica" element={<AsesoriaPedagogicaPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
