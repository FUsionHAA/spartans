import React from 'react'
import UserCard from '../../components/UserCard/UserCard'
import { Link } from 'react-router-dom'
import styles from './Users.module.scss'
import PropTypes from 'prop-types'

const Users = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.users.map((item, index) => {
                return <Link to={`/repo`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <UserCard
                        key={item.id}
                        userAvatar={item.avatar_url}
                        userName={item.login}
                        userDesc={'desc'}
                        handleApiCall={() => props.handleApiCall(item.repos_url)}
                    />
                </Link>
            })}
        </div>
    );
}

Users.propTypes = {
    users: PropTypes.array,
    handleApiCall: PropTypes.func
}

export default Users;