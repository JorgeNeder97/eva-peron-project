import React from 'react';
import styles from './Institucional.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { useSlowLoad } from '../../hooks/useSlowLoad';

export const Institucional = () => {

  const { isLoaded } = useSlowLoad();

  return (
    <>
        <NavBar />
        <div className={ isLoaded ? styles.mainContainer : styles.unloaded}>
            <h2>INSTITUCIONAL</h2>
        </div>
    </>
  )
}
