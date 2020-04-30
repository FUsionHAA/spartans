import React from 'react'
import styles from './RepoCard.module.scss'
import PropTypes from 'prop-types'

const RepoCard = (props) => {
    return (
        <div className={styles.wrapper} onClick={() => { props.handleApiCall(); props.handleStargazersApiCall();}}>
            <div><span>Name:</span> {props.repoName}</div>
            <div className={styles.wrapper__desc}><span>Description:</span> {props.repoDesc}</div>
            <div><span>Created:</span> {props.repoDate}</div>
        </div>
    )
}

RepoCard.propTypes = {
    handleApiCall: PropTypes.func,
    handleStargazersApiCall: PropTypes.func,
    repoName: PropTypes.string,
    repoDesc: PropTypes.string,
    repoDate: PropTypes.string
}
 
export default RepoCard;