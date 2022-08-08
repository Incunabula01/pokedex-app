import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
    return (
        <form action="searchInput" className={styles.search}>
            <input id="searchInput" type="search" placeholder='Search Pokemons'/>
       </form>
    )
}

export default SearchBox;