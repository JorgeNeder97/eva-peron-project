import React from 'react';
import styles from './styles/MainApp.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RectoriaProtectedRoutes } from './pages/Rectoria/Protected-Routes/RectoriaProtectedRoutes';
import { SecretariaProtectedRoutes } from './pages/Secretaria/Protected-Routes/SecretariaProtectedRoutes';
import { SeccionAlumnosProtectedRoutes } from './pages/SeccionAlumnos/Protected-Routes/SeccionAlumnosProtectedRoutes';
import { AsesoriaPedagogicaProtectedRoutes } from './pages/AsesoriaPedagogica/Protected-Routes/AsesoriaPedagogicaProtectedRoutes';
import { HomePage } from './pages/Home/HomePage';
import { Institucional } from './pages/Institucional/Institucional';
import { Noticias } from './pages/Noticias/Noticias';
import { RectoriaPage } from './pages/Rectoria/RectoriaPage';
import { SecretariaPage } from './pages/Secretaria/SecretariaPage';
import { SeccionAlumnosPage } from './pages/SeccionAlumnos/SeccionAlumnosPage';
import { AsesoriaPedagogicaPage } from './pages/AsesoriaPedagogica/AsesoriaPedagogicaPage';
import { RectoriaPanel } from './pages/Rectoria/Protected-Routes/RectoriaPanel/RectoriaPanel';
import { SecretariaPanel } from './pages/Secretaria/Protected-Routes/SecretariaPanel/SecretariaPanel';
import { SeccionAlumnosPanel } from './pages/SeccionAlumnos/Protected-Routes/SeccionAlumnosPanel/SeccionAlumnosPanel';
import { AsesorPedagogicoPanel } from './pages/AsesoriaPedagogica/Protected-Routes/AsesorPedagogicoPanel/AsesorPedagogicoPanel';
import { Footer } from './components/Footer/Footer';
import { useSlowLoad } from './hooks/useSlowLoad';
import 'normalize.css/normalize.css';
import { RectoriaProvider } from './context/RectoriaContext/RectoriaProvider';
import { SecretariaProvider } from './context/SecretariaContext/SecretariaProvider';
import { SeccionAlumnosProvider } from './context/SeccionAlumnosContext/SeccionAlumnosProvider';
import { AsesoriaPedagogicaProvider } from './context/AsesoriaPedagogicaContext/AsesoriaPedagogicaProvider';
import { NuevoUsuarioForm } from './pages/Rectoria/Protected-Routes/RectoriaPanel/GestionUsuarios/NuevoUsuarioForm/NuevoUsuarioForm';
import { GestionUsuarios } from './pages/Rectoria/Protected-Routes/RectoriaPanel/GestionUsuarios/GestionUsuarios';
import { ModificarUsuarios } from './pages/Rectoria/Protected-Routes/RectoriaPanel/GestionUsuarios/ModificarUsuarios/ModificarUsuarios';
import { ModificarUsuarioForm } from './pages/Rectoria/Protected-Routes/RectoriaPanel/GestionUsuarios/ModificarUsuarioForm/ModificarUsuarioForm';
import { EliminarUsuarios } from './pages/Rectoria/Protected-Routes/RectoriaPanel/GestionUsuarios/EliminarUsuarios/EliminarUsuarios';
import { GestionNoticias } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Noticias/GestionNoticias';
import { NuevaNoticiaForm } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Noticias/CrearNoticia/NuevaNoticiaForm';



export const MainApp = () => {

    const { isLoaded } = useSlowLoad();


    return (
        <div className={isLoaded ? styles.loaded : styles.unloaded}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institucional" element={<Institucional />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/rectoria" element={<RectoriaProvider><RectoriaPage /></RectoriaProvider>} />
                <Route path="/secretaria" element={<SecretariaProvider><SecretariaPage /></SecretariaProvider>} />
                <Route path="/alumnos" element={<SeccionAlumnosProvider><SeccionAlumnosPage /></SeccionAlumnosProvider>} />
                <Route path="/asesoria-pedagogica" element={<AsesoriaPedagogicaProvider><AsesoriaPedagogicaPage /></AsesoriaPedagogicaProvider>} />
                <Route path="*" element={<Navigate to="/" />} />
                
                <Route 
                    path="/rectoria/*" 
                    element={
                        <RectoriaProvider>
                            <Routes>
                                <Route element={<RectoriaProtectedRoutes />}>
                                    <Route path="home" element={<RectoriaPanel />} />
                                    <Route path="gestionUsuarios" element={<GestionUsuarios />} />
                                    <Route path="gestionUsuarios/nuevoUsuario" element={<NuevoUsuarioForm />} />
                                    <Route path="gestionUsuarios/listarUsuarios" element={<ModificarUsuarios />} />
                                    <Route path="gestionUsuarios/modificarUsuario/:id" element={<ModificarUsuarioForm />} />
                                    <Route path="gestionUsuarios/eliminarUsuarios" element={<EliminarUsuarios />} />
                                </Route>
                            </Routes>
                        </RectoriaProvider>
                    }
                />
                
                <Route
                    path="/secretaria/*"
                    element={
                        <SecretariaProvider>
                            <Routes>
                                <Route element={<SecretariaProtectedRoutes />}>
                                    <Route path="home" element={<SecretariaPanel />} />
                                    <Route path="gestionNoticias" element={<GestionNoticias />} />
                                    <Route path="gestionNoticias/nuevaNoticia" element={<NuevaNoticiaForm />} />
                                </Route>
                            </Routes>
                        </SecretariaProvider>
                    }
                />

                <Route
                    path="/alumnos/*"
                    element={
                        <SeccionAlumnosProvider>
                            <Routes>
                                <Route element={<SeccionAlumnosProtectedRoutes />}>
                                    <Route path="home" element={<SeccionAlumnosPanel />} />
                                </Route>
                            </Routes>
                        </SeccionAlumnosProvider>
                    }
                />

                <Route
                    path="/asesoria-pedagogica/*"
                    element={
                        <AsesoriaPedagogicaProvider>
                            <Routes>
                                <Route element={<AsesoriaPedagogicaProtectedRoutes />}>
                                    <Route path="home" element={<AsesorPedagogicoPanel />} />
                                </Route>
                            </Routes>
                        </AsesoriaPedagogicaProvider>
                    }
                />

            </Routes>
            <Footer />
        </div>
    )
}
