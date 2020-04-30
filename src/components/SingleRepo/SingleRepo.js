import React, { Component } from 'react'
import Stargazers from '../Stargazers/Stargazers'
import styles from './SingleRepo.module.scss'
import PropTypes from 'prop-types'

class SingleRepo extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.props.history.push('/repo');
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div><span>Stargazers: </span></div>
                <div className={styles.stargazers}>
                    {this.props.stargazers.map((item) => {
                        return <Stargazers key={item.id} stargazer={item.login} />
                    })}
                </div>

                <div><span>Number of watchers:</span> {this.props.watchers}</div>
                <div><span>Number of forks:</span> {this.props.forks}</div>
                <div><span>License type:</span> {this.props.license}</div>
                <div className={styles.btn} onClick={this.handleBack}>Go back</div>
            </div>
        );
    }
}

SingleRepo.propTypes = {
    stargazer: PropTypes.object,
    watchers: PropTypes.number,
    forks: PropTypes.number,
    license: PropTypes.string
}

export default SingleRepo;