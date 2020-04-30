import React from 'react'
import styles from './Error.module.scss'
import PropTypes from 'prop-types'

const Error = (props) => {
    return (
        <div className={styles.wrapper}>
            <div>Ops! Something went wrong...</div>
            <div>Error message: <span>{props.error}</span></div>
        </div>
    );
}

Error.propTypes = {
    error: PropTypes.object
}

export default Error;