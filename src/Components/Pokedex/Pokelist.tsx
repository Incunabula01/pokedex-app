import React from 'react';
import PokeCard from './PokeCard';

import styles from './Pokelist.module.scss';

const PokeList = () => {
    return (
        <ul className={styles['poke-list-grid']}>
            {/* {results.map((el, i) => {
                return (
                    <li key={i}>
                        <PokeCard title={el} img={}/>
                    </li>
                )
            })} */}            
        </ul>
    )
}

export default PokeList;