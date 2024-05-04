import React from 'react'
import { Carrusel } from '../../components/Carrusel/Carrusel'
import { Noticias } from '../../components/News/Noticias'
import styles from './HomePage.module.css'

export const HomePage = () => {


  return (
    <>
      <div>
        <Carrusel />
        <Noticias />
      </div>
    </>
  )
}
