import React from 'react';
import 'normalize.css/normalize.css';
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
import { ModificarNoticia } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Noticias/ModificarNoticia/ModificarNoticia';
import { ModificarNoticiaForm } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Noticias/ModificarNoticiaForm/ModificarNoticiaForm';
import { EliminarNoticia } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Noticias/EliminarNoticia/EliminarNoticia';
import { NoticiaCompleta } from './pages/Noticias/Noticia/NoticiaCompleta';
import { GestionCargos } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Cargos/GestionCargos';
import { CrearCargoForm } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Cargos/CrearCargo/CrearCargoForm';
import { VerCargos } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Cargos/VerCargos/VerCargos';
import { ModificarCargo } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Cargos/ModificarCargo/ModificarCargo';
import { ModificarCargoForm } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Cargos/ModificarCargoForm/ModificarCargoForm';
import { EliminarCargo } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Cargos/EliminarCargo/EliminarCargo';
import { GestionDocentes } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/GestionDocentes';
import { NuevoDocenteForm } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/NuevoDocente/NuevoDocenteForm';
import { ModificarDocente } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/ModificarDocente/ModificarDocente';
import { ModificarDocenteForm } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/ModificarDocenteForm/ModificarDocenteForm';
import { EliminarDocente } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/EliminarDocente/EliminarDocente';
import { PersonalPanel } from './pages/Secretaria/Protected-Routes/PesonalPanel/PersonalPanel';
import { SolicitarLicencia } from './pages/Secretaria/Protected-Routes/PesonalPanel/SolicitarLicencia/SolicitarLicencia';
import { MostrarLicencia } from './pages/Secretaria/Protected-Routes/PesonalPanel/MostrarLicencia/MostrarLicencia';
import { MostrarDatos } from './pages/Secretaria/Protected-Routes/PesonalPanel/MostrarDatos/MostrarDatos';
import { Licencias } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/Licencias/Licencias';
import { HistorialLicencias } from './pages/Secretaria/Protected-Routes/SecretariaPanel/Docentes/Licencias/HistorialLicencias/HistorialLicencias';



export const MainApp = () => {

    const { isLoaded } = useSlowLoad();


    return (
        <div className={isLoaded ? styles.loaded : styles.unloaded}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/institucional" element={<Institucional />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/noticias/:id" element={<NoticiaCompleta />} />
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
                                    <Route path="gestionNoticias/modificarNoticias" element={<ModificarNoticia />} />
                                    <Route path="gestionNoticias/modificarNoticias/:id" element={<ModificarNoticiaForm />} />
                                    <Route path="gestionNoticias/eliminarNoticias" element={<EliminarNoticia />} />
                                    <Route path="gestionCargos" element={<GestionCargos />} />
                                    <Route path="gestionCargos/nuevoCargo" element={<CrearCargoForm />} />
                                    <Route path="gestionCargos/listarCargos" element={<VerCargos />} /> 
                                    <Route path="gestionCargos/modificarCargo" element={<ModificarCargo />} />
                                    <Route path="gestionCargos/modificarCargo/:id" element={<ModificarCargoForm />} />
                                    <Route path="gestionCargos/eliminarCargo" element={<EliminarCargo />} />
                                    <Route path="gestionDocentes" element={<GestionDocentes />} />
                                    <Route path="gestionDocentes/altaDocente" element={<NuevoDocenteForm />} />
                                    <Route path="gestionDocentes/modificarDocente" element={<ModificarDocente />} />
                                    <Route path="gestionDocentes/modificarDocente/:id" element={<ModificarDocenteForm />} />
                                    <Route path="gestionDocentes/bajaDocente" element={<EliminarDocente />} />
                                    <Route path="gestionDocentes/licencias" element={<Licencias />} />
                                    <Route path="gestionDocentes/licencias/historialLicencias/:id" element={<HistorialLicencias />} />

                                    <Route path="personalDocente" element={<PersonalPanel />} />
                                    <Route path="personalDocente/solicitarLicencia" element={<SolicitarLicencia />} />
                                    <Route path="personalDocente/solicitudLicencia/:id" element={<MostrarLicencia />} />
                                    <Route path="personalDocente/datosPersonales" element={<MostrarDatos />} />
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
