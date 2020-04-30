import React from 'react'
import styles from './Search.module.scss'

const Search = (props) => {
    return (
        <input className={styles.search} type='text' onChange={props.searchUsers} placeholder='Search Users' />
    );
}
 
export default Search;