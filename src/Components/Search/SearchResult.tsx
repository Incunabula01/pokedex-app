import React, {useState} from 'react';
import styles from './SearchResult.module.scss';
import { Pokemon } from 'pokenode-ts';

type SearchResultProps = {
    selectedPokemon: Pokemon | any;
}
const SearchResult = ({selectedPokemon}: SearchResultProps) => {
    console.log('pokemanz', selectedPokemon);
    return (
        <div className={styles['poke-result-card']}>
        {selectedPokemon ?
                (
                    <>
                        <img src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={selectedPokemon.name} />
                        <h2>{selectedPokemon.name}</h2>
                        <p>Id: {selectedPokemon.id}</p>
                        <p>Height: {selectedPokemon.height}</p>
                        <p>Weight: {selectedPokemon.weight}</p>
                        <p>Base Exp: {selectedPokemon.base_experience}</p>
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