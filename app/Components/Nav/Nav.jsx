import React from 'react'
import Link from 'next/link'
import styles from '@/Styles/nav.module.css'

const links = [
  {
    label: 'auth',
    route: '/auth'
  },
  {
    label: 'Pokemons',
    route: '/pokemon'
  }
]

export default function Nav () {
  return (
    <fragment>
      <div className={styles.nav_bar}>
        <Link href='/' className={styles.tittle}>WELCOME</Link>
        {links.map(({ label, route }) => (
          <li key={label} className='link'>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
      </div>
    </fragment>
  )
}
