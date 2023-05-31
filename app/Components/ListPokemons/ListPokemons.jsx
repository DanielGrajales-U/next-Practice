import React from 'react'
import Styles from '@/Styles/ListPokemons.module.css'
import LikeButton from '../LikeButton/LikeButton'

const fetchingData = async () => {
  return await fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
}

export default async function ListPokemons () {
  const pokemonsData = await fetchingData().then(res => res.results)

  return (
    <fragment>
      <section className={Styles.pokemons}>
        {pokemonsData.map(pok => (
          <div className={Styles.pok} key={pok.name}>
            <p className={Styles.pokemon_name}>{pok.name}</p>
            <LikeButton id={pok.name} />
          </div>
        ))}
      </section>
    </fragment>
  )
}
