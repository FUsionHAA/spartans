import React, { Component } from 'react'
import RepoCard from '../../components/RepoCard/RepoCard'
import { Link } from 'react-router-dom'
import styles from './Repos.module.scss'
import PropTypes from 'prop-types'

class Repos extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className={styles.btn} onClick={this.handleBack}>Go back</div>
                <div className={styles.wrapper}>
                    {this.props.repos.map((item) => {
                        let timestamp = Date.parse(item.created_at)
                        let date = new Date(timestamp).toString()
                        return (
                            <Link to={`/single`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <RepoCard
                                    repoName={item.full_name}
                                    repoDesc={(item.description === null) ? 'No description' : item.description}
                                    repoDate={date}
                                    handleApiCall={() => this.props.handleApiCall(item.url)}
                                    handleStargazersApiCall={() => this.props.handleStargazersApiCall(item.stargazers_url)}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

Repos.propTypes = {
    repos: PropTypes.array,
    handleApiCall: PropTypes.func,
    handleStargazersApiCall: PropTypes.func
}

export default Repos;