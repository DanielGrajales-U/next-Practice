import React from 'react'

import '../Styles/global.css'

import Nav from './Components/Nav/Nav'
import ListAvatars from './Components/ListAvatars/ListAvatars'
import Link from 'next/link'

const links = [
  {
    label: 'auth',
    route: '/auth'
  }
]

export default function page () {
  return (
    <fragment>
      <div className='tittle'>
        <Nav />
        {links.map(({ label, route }) => (
          <li key={label} className='link'>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
        <ListAvatars />
      </div>
    </fragment>
  )
}
