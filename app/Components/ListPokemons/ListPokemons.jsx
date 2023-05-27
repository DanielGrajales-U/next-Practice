import React from 'react'
import Styles from '@/Styles/ListPokemons.module.css'

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
          <p className={Styles.pokemon_name} key={pok.name}>{pok.name}</p>
        ))}
      </section>
    </fragment>
  )
}
