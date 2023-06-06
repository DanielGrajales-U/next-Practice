import React from 'react'
import Styles from '@/Styles/Loading.module.css'

export default function Loading () {
  return (
    <>
      <marquee className={Styles.loading}>Cargando Pokemons...</marquee>
    </>
  )
}
