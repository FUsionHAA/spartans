import React from 'react'
import styles from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.background}>
            <div className={styles.loader_container}>
                <div className={styles.loader}>
                    <div className={styles.container}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line2}></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;