import React from 'react'
import styles from './Maps.module.css';

export const Maps = () => {
  return (
    <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.6795554134037!2d-64.2703041898127!3d-27.78884623027855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5213b7f6d321%3A0x25fc1bc1471be8d9!2sEscuela%20Francisca%20Jacques!5e0!3m2!1ses-419!2sar!4v1715010238285!5m2!1ses-419!2sar" className={styles.maps} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}
