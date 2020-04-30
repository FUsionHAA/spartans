import React from 'react'
import styles from './UserCard.module.scss'
import PropTypes from 'prop-types'

const UserCard = (props) => {
    return (
        <div className={styles.wrapper} onClick={props.handleApiCall}>
            <img src={props.userAvatar} alt="" />
            <div className={styles.wrapper__body}>
                <div>User: <span>{props.userName}</span></div>
                <div>{props.userDesc}</div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    handleApiCall: PropTypes.func,
    userAvatar: PropTypes.string,
    userName: PropTypes.string,
    userDesc: PropTypes.string
}

export default UserCard;