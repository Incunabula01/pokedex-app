import React from 'react';

import SearchBox from '../Search/SearchBox';
import PokeList from './Pokelist';
import SearchResult from '../Search/SearchResult';

import styles from './PokedexContainer.module.scss';

const PokedexContainer = () => {
    return (
        <section className={styles['pokedex-container']}>
            <div className={styles['pokelist-container']}>
                <SearchBox />
                <PokeList/>
            </div>
            <div className={styles['poke-search-result-container']}>
                <SearchResult/>
            </div>
        </section>
    )
}

export default PokedexContainer;