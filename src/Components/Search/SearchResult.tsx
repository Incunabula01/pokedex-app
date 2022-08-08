import React, {useState} from 'react';
import styles from './SearchResult.module.scss';

const SearchResult = () => {
    const [selectPokemon, setSelectPokemon] = useState<boolean>(false);
    return (
        <div className={styles['poke-result-card']}>
        {
                selectPokemon ?
                    (
                        <>
                            {/* image here */}
                            <p>Name: Pikachu</p>
                            <p>Id: id!</p>
                            <p>Height: ???</p>
                            <p>Weight: ???</p>
                            <p>Base Exp: 9000</p>
                        </>
                    )
                    :
                        <>
                            <h2>Welcome to the Pokedex!</h2>
                        </>
        }
       </div>
    )
}

export default SearchResult;