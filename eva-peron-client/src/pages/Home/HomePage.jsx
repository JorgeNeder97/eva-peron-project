import React from 'react'
import styles from './HomePage.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
import { Carrusel } from '../../components/Carrusel/Carrusel'
import { Noticia } from '../../components/News/Noticia'
import { Maps } from '../../components/Maps/Maps';
import { InfoBar } from '../../components/InfoBar/InfoBar';

export const HomePage = () => {


  return (
    <>
      <NavBar />
      <div>
        <Carrusel />
        <Noticia />
        <InfoBar />
        <Maps />
      </div>
    </>
  )
}
