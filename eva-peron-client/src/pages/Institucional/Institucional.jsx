import React from 'react';
import styles from './Institucional.module.css';
import { useSlowLoad } from '../../hooks/useSlowLoad';

export const Institucional = () => {

  const { isLoaded } = useSlowLoad();

  return (
    <>
        <div className={ isLoaded ? styles.mainContainer : styles.unloaded}>
            <h2>INSTITUCIONAL</h2>
        </div>
    </>
  )
}
