import React from 'react'
import styles from './HomePage.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
import { Carrusel } from '../../components/Carrusel/Carrusel'
import { Noticia } from '../../components/News/Noticia'
import { Maps } from '../../components/Maps/Maps';
import { InfoBar } from '../../components/InfoBar/InfoBar';
import { GaleriaNoticias } from '../../components/GaleriaNoticias/GaleriaNoticias';
import { PropuestasAc } from '../../components/PropuestasAc/PropuestasAc';

export const HomePage = () => {


  return (
    <>
      <NavBar />
      <div>
        <Carrusel />
        <PropuestasAc />
        <GaleriaNoticias />
        <InfoBar />
        <Maps />
      </div>
    </>
  )
}
