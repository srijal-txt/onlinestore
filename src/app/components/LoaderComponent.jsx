import React from 'react'
import styles from '../style/loader.module.scss'
const LoaderComponent = () => {
  return (
    <>
    <div className={styles.loading}>
        <div className={styles.loader}>
        </div>
    </div>
    </>
  )
}

export default LoaderComponent