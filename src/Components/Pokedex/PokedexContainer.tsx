import React, {useState, useEffect} from 'react';

import SearchBox from '../Search/SearchBox';
import PokeList from './Pokelist';
import SearchResult from '../Search/SearchResult';

import styles from './PokedexContainer.module.scss';
import { asyncLoader } from '../../utils';

import { PokemonClient, Pokemon, NamedAPIResource, NamedAPIResourceList } from "pokenode-ts";

const PokedexContainer = () => {
    const [pokemonList, setPokemonList] = useState<Array<NamedAPIResource>>([]);
    
    const [selectedPokemon, setSelectedPokemon] = useState<string>('');
    const [pokemon, setPokemon] = useState<Promise<Pokemon> | null>(null);
    
    const fetchLists = async (searchQuery:string) => {
        const api = new PokemonClient();
        const pokeList: Array<NamedAPIResource> = [];
        asyncLoader({type:'start', container:'list', width: '100', height: '100'});
        await api.listPokemons(0, 151)
            .then((data: NamedAPIResourceList) => {
                data.results.forEach(item => {
                    pokeList.push(item);
                })
                console.log('ze pokemans ==>', pokeList);
                if(searchQuery !== 'all'){
                    const filteredData = pokemonList.filter(el => el.name.includes(searchQuery));
                    setPokemonList(filteredData);
                } else {
                    setPokemonList(pokeList);
                }
                
                asyncLoader({ type: 'stop', container: 'list', width: '0', height: '0' });
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect( () => {
        fetchLists('all');
    }, []);

   useEffect(() => {
    if(selectedPokemon){
        asyncLoader({ type: 'start', container: 'searchResult', width: '50', height: '50' });
        const fetchPokemon = async () => {
            const response = await fetch(selectedPokemon);
            const body = await response.json();
            console.log('let me see your pokemans', body);
            setPokemon(body);
            asyncLoader({ type: 'stop', container: 'searchResult', width: '0', height: '0' });
        }
        fetchPokemon();
    }
   }, [selectedPokemon]);

   const handleSearchQuery = (value: string) => {
        const searchQuery = value ? value : 'all';
       fetchLists(searchQuery);
       setPokemon(null);
   }

    return (
        <section className={styles['pokedex-container']}>
            <div className={styles['pokelist-container']} id="list">
                <SearchBox onQueryChange={handleSearchQuery}/>
                <PokeList pokeData={pokemonList} onSelect={(name) => setSelectedPokemon(name)} />
            </div>
            <div className={styles['poke-search-result-container']} id="searchResult">
                <SearchResult selectedPokemon={pokemon}/>
            </div>
        </section>
    )
}

export default PokedexContainer;