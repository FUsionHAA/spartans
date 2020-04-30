import React from 'react'
import styles from './Stargazers.module.scss'
import PropTypes from 'prop-types'

const Stargazers = (props) => {
    return (
        <div className={styles.wrapper}>{props.stargazer}</div>
    );
}

Stargazers.propTypes = {
    stargazer: PropTypes.string
}

export default Stargazers;