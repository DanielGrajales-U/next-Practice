import React from 'react'
import ListPokemons from '../Components/ListPokemons/ListPokemons'

const delay = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
}

export default function page () {
  return (
    <fragment>
      <h1>POKEMONS</h1>
      <ListPokemons />
    </fragment>
  )
}
