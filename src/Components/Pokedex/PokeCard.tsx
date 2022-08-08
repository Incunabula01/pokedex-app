import React from 'react';
import styles from './PokeCard.module.scss';

type PokeCardProps = {
    img: string;
    name: string;
}

const PokeCard = ({ img, name }: PokeCardProps) => {
    return (
        <div className={styles['poke-card']}>
           {/* <img src="" alt="" /> */}
           <h3>{name}</h3>
        </div>
    )
}

export default PokeCard;